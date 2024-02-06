<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'post_id',
        'comment_id', 
        'comment',

    ];
    public function comment(){
        return $this->hasMany(Comment::class);
        
    }
    public function user(){
        return $this->belongsTo(User::class);
        
    }
    public function post(){
        return $this->belongsTo(Post::class);
        
    }
    public function reply(){
        return $this->belongsTo(Comment::class, 'comment_id');
        
    }
    public function like(){
        return $this->hasMany(Like::class);
        
    }
    
    
}
