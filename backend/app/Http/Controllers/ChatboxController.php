<?php

namespace App\Http\Controllers;

use App\Events\ChatEvent;
use App\Models\Chatbox;
use App\Models\Message;
use Illuminate\Http\Request;
use App\Http\Requests\StoreChatboxRequest;
use App\Http\Requests\UpdateChatboxRequest;





class ChatboxController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function message(Request $request)
    {
       
       $authId = $request->input('auth_id');
       $receiverId = $request->input('receiver_id');
       $messageContent = $request->input('message');

      
       $message = Message::create([
           'sender_id' => $authId,
           'receiver_id' => $receiverId,
           'message' => $messageContent,
       ]);

       
       if ($message) {
     
           event(new ChatEvent($message));

          
           return response()->json(['message' => 'Message sent successfully'], 200);
       } else {
          
           return response()->json(['message' => 'Failed to send message'], 500);
       }

    }

    
}
