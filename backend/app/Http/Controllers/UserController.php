<?php

namespace App\Http\Controllers;
use Carbon\Carbon;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;

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

    public function user()
    {  
        return response()->json(Auth::user());
    }

    public function logout()
    {
        $cookie = Cookie::forget('jwt');

        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }

    
}