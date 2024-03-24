<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'sender_id',
        'receiver_id',
        'path',
        'chatbox_id', 
        'message',

    ];


    public function user(){
        return $this->belongsTo(User::class, 'sender_id') ;
        
    }
    public function chatbox(){
        return $this->belongsTo(Chatbox::class) ;
        
    }
}
