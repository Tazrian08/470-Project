<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Profilepic;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProfilepicRequest;
use App\Http\Requests\UpdateProfilepicRequest;

class ProfilepicController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $user=User::find($request->id);

        $image = time() . '-' . $user->name . '.' . $request->file('image')->extension();
        $request->file('image')->move(public_path('images'), $image);
        $path=asset('images/' . $image);


        $profilepic=Profilepic::create([
            'user_id' => $request->input('id'),
            'path' => $path,
            'active' => 0,
        ]);
        return response()->json(['image'=>$path]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProfilepicRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Profilepic $profilepic)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Profilepic $profilepic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProfilepicRequest $request, Profilepic $profilepic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Profilepic $profilepic)
    {
        //
    }
}
