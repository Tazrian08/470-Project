<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;

class SkillController extends Controller
{

    public function index()
    {
        $skills = Skill::all();
        return response()->json($skills);
    }

    
    public function store(Request $request)
    {
        $skill=Skill::create([
            'user_id' => $request->input('user_id'),
            'type' => $request->input('type'),
        ]);
        return response()->json($skill, 201);
    }


    public function show(Skill $skill)
    {
        return response()->json($skill);
    }

   
    public function update(Request $request)
    {
        
        $skill=Skill::find( $request->input('id'));
        $skill->update([
            'type' => $request->input('type'),

        ]);

    
        return response()->json($skill); 
        
    }


    public function destroy(Skill $skill)
    {
        $skill->delete();
        return response()->json(null, 204);
    }
}
