<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password', 
        'username',
        'dob',
        'gender',
        'contact',
        'about',
        'blood_type',
    ];


    public function profilepic(){
        return $this->hasMany(Profilepic::class);
        
    }
    public function profession(){
        return $this->hasMany(Profession::class);
        
    }
    public function hobby(){
        return $this->hasMany(Hobby::class);
        
    }
    public function skill(){
        return $this->hasMany(Skill::class);
        
    }
    public function follower(){
        return $this->hasMany(Follow::class,'follower_id');
        
    }
    public function followed(){
        return $this->hasMany(Follow::class,'followed_id');
        
    }
    public function post(){
        return $this->hasMany(Post::class);
        
    }
    public function comment(){
        return $this->hasMany(Comment::class);
        
    }
    public function like(){
        return $this->hasMany(Like::class);
        
    }
    public function sender(){
        return $this->hasMany(Notification::class,'sender_id');
        
    }
    public function receiver(){
        return $this->hasMany(Notification::class,'user_id');
        
    }
    public function chatbox(){
        return $this->hasMany(Chatbox::class, 'admin_id');
        
    }
    public function chatboi(){
        return $this->hasMany(Chatboi::class);
        
    }
    public function message(){
        return $this->hasMany(Message::class);
        
    }
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
