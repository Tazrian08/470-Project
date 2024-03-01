<?php

namespace App\Http\Controllers;
use Carbon\Carbon;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use App\Models\Hobby;
use App\Models\Follow;
use App\Models\Post;

class UserController extends Controller
{
    public function register(Request $request){
        $user=User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'username' => $request->input('username'),
            'dob' => $request->input('date'),
            'about' => $request->input('about'),
            'contact' => $request->input('contact'),
            'blood_type' => $request->input('blood_type'),
            'gender' => $request->input('gender'),

        ]);
        return response()->json(['message'=>'User created!','user'=>$user]);

    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['flag'=>True]);
        }

        $user = Auth::user();

        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $token, 60 * 24); // 1 day

        return response(['user'=>$user, 'flag'=>False,
            'message' => $token
        ])->withCookie($cookie);
    }

    public function profuser($id, Request $request)
{


    $user = User::where("id", $id)
                ->with("post","post.comment","post.like","post.comment.like","profession","hobby","skill","follower","followed","profilepic")
                ->get();

    $posts = Post::where("user_id", $id)
                 ->with("comment","like","comment.like","image")
                 ->orderBy('created_at', 'desc')
                 ->take(5)
                 ->get();

    return response()->json([
        'user' => $user,
        'posts' => $posts
    ]);
}


    public function user()
    {
        return response()->json(Auth::user()->load('follower', 'followed'));
    }

    public function feed()
    {
        $user = Auth::user();
        $posts = Post::whereIn('user_id', function($query) use ($user) {
                        $query->select('followed_id')
                              ->from('follows')
                              ->where('follower_id', $user->id);
                    })
                    ->with('user', 'comment', 'like',"comment.like","image")
                    ->orderBy('created_at', 'desc')
                    ->take(5)
                    ->get();

        return response()->json([$user, $posts]);
    }

    public function logout()
    {
        $cookie = Cookie::forget('jwt');

        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }

    public function addHobby(Request $request)
    {
        $hobby = Hobby::create([
            'user_id' =>$request->input('user_id'),
            'type' =>$request->input('type'),
        ]);

        return response()->json(['message' => 'Hobby added successfully', 'hobby' => $hobby]);
    }

    public function follow(Request $request)
    {
        $follow = Follow::create([
            'follower_id' => $request->follower_id,
            'followed_id' => $request->followed_id,
        ]);

        return response()->json(['message' => 'User followed successfully']);
    }


}
