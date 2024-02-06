<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chatbox extends Model
{
    use HasFactory;

    protected $fillable = [
        'admin_id',
        'name',
    ];
    
    public function admin(){
        return $this->belongsTo(User::class, 'admin_id') ;
        
    }
    public function chatboi(){
        return $this->hasMany(Chatboi::class);
        
    }
    public function message(){
        return $this->hasMany(Message::class);
        
    }
}
