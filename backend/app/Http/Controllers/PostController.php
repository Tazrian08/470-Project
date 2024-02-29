<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;

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

    
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
