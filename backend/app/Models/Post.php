<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'path',
        'type', 
        'description',
        'public',
    ];


    public function user(){
        return $this->belongsTo(User::class);
        
    }
    public function comment(){
        return $this->hasMany(Comment::class);
        
    }
    public function like(){
        return $this->hasMany(Like::class);
        
    }
}
