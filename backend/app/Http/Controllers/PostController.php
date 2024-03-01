<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use App\Models\Image;
use Illuminate\Http\Request;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function loadPosts(Request $request)
     {
         $id = $request->query('id');
         $skip = $request->query('skip');

         $posts = Post::where("user_id", $id)
                 ->with("comment","like","comment.like")
                 ->orderBy('created_at', 'desc')
                 ->skip($skip)
                 ->take(5)
                 ->get();


        return response()->json($posts);

         
         // Now you can use $id and $skip to fetch posts from the database
     }



    

     
public function share(Request $request)
{
    // Validate the incoming request data
    $validator = Validator::make($request->all(), [
        'pid' => 'required|exists:posts,id',
        'uid' => 'required|exists:users,id',
        'description' => 'required|string',
    ]);

    // Check if the validation fails
    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    // Create the shared post
    $sharedPost = Post::create([
        'user_id' => $request->uid,
        'type' => 'shared',
        'shared_post_id' => $request->pid,
        'description' => $request->description,
    ]);

    // Return a JSON response indicating success
    return response()->json(['message' => 'Post shared successfully', 'post' => $sharedPost]);
}

     

     
     
    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {   
        $data=$request->files;
        $length=$data->count();
        $user=User::find($request->input('user_id'));
        $type="Text";
        if ($request->files) {
            $type="Image/Video";
            $post = Post::create([
                'user_id' => $request->input('user_id'),
                'type'=>$type,
                'description' => $request->input('description'),
            ]);
            for ($i=0; $i  < $length; $i++) {
                $file=$request->file("files_" . $i);
                // Generate a unique filename for each file
                $filename = time() . '-' . $user->id . '.' . $i . $file->extension();
                
                // Move the file to the desired directory
                $file->move(public_path('images'), $filename);
                
                // Create the database entry for the file
                $path = asset('images/' . $filename);
                $image = Image::create([
                    'post_id' => $post->id, // Ensure $user_id is defined
                    'path' => $path,
                ]);
            }
    } else {
        $post = Post::create([
            'user_id' => $request->input('user_id'),
            'type'=>$type,
            'description' => $request->input('description'),
        ]);
    }
        return response()->json($post->load("image"));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $posts=Post::where("user_id", $id)
        ->with("comment","like","comment.like")
        ->get();

        return response()->json($posts);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
