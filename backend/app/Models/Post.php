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
        'shared_post_id',
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

    public function image(){
        return $this->hasMany(Image::class);
        
    }

    public function share(){
        return $this->hasMany(Post::class);
        
    }

    public function original(){
        return $this->belongsTo(Post::class, 'shared_post_id');
        
    }
}
