<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profilepic extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'path',
        'active',
        'shared_post_id',
    ];


    public function user(){
        return $this->belongsTo(User::class);
        
    }
}
