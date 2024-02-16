<?php

namespace App\Http\Controllers;

use App\Models\Hobby;
use Illuminate\Http\Request;
use App\Http\Requests\StoreHobbyRequest;
use App\Http\Requests\UpdateHobbyRequest;

class HobbyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        $hobbies=Hobby::where("user_id",$id)->get();
        return response()->json($hobbies);
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
    public function store(StoreHobbyRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Hobby $hobby)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Hobby $hobby)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        
        $hobby=Hobby::find( $request->input('id'));
        $hobby->update([
            'type' => $request->input('type'),

        ]);

    
        return response()->json($hobby); 
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Hobby $hobby)
    {
        //
    }
}
