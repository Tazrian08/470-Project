<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chatboi extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'chatbox_id',

    ];

    public function user(){
        return $this->belongsTo(User::class) ;
        
    }
    public function chatbox(){
        return $this->belongsTo(Chatbox::class) ;
        
    }
}
