<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\HobbyController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\ProfessionController;
use App\Http\Controllers\ProfilepicController;
use App\Http\Controllers\FollowController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//USER ROUTES
Route::post("/register",[UserController::class,"register"]);
Route::post("/login",[UserController::class,"login"]);
Route::get("/profuser/{id}", [UserController::class,"profuser"]);
Route::get("/about/{id}", [UserController::class,"profuser"]);
Route::get("/contact/{id}", [UserController::class,"profuser"]);
Route::post("/hobbies", [UserController::class, "addHobby"]);
Route::post('/follow', [UserController::class, 'follow']);



//POST ROUTES
Route::get("/loadposts", [PostController::class,"loadposts"]);
Route::post("/post/create",[PostController::class,"create"]);
Route::post("/post/share", [PostController::class,"share"]);



//FEED ROUTES
Route::get("/loadfeed", [PostController::class,"loadfeed"]);


//SKILL ROUTES
Route::post("/skills-form", [SkillController::class,"store"]);
Route::post("/skills-edit", [SkillController::class,"update"]);


//HOBBY ROUTES
Route::get("/gethobby/{id}", [HobbyController::class,"index"]);
Route::post("/hobbies-edit", [HobbyController::class,"update"]);

//PROFILE PIC ROUTES
Route::post("/propic/create",[ProfilepicController::class,"create"]);


//PROFESSION ROUTES
Route::post("/addprofession",[ProfessionController::class,"create"]);


//FOLLOW ROUTES
Route::get('/followers/count/{id}', [FollowController::class, 'getFollowerCount']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [UserController::class, 'user']);
    Route::get('/userfeed', [UserController::class, 'feed']);
    Route::post('/logout', [UserController::class, 'logout']);


});
