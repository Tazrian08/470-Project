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
      
       $messageContent = $request->input('message');

      
       $message = Message::create([
           'sender_id' => $authId,
        
           'message' => $messageContent,
       ]);

       
       if ($message) {
     
           event(new ChatEvent($message));

          
           return response()->json(['message' => 'Message sent successfully'], 200);
       } else {
          
           return response()->json(['message' => 'Failed to send message'], 500);
       }

    }

    public function checkChatbox($profileId, $authId)
    {
        $chatbox = Chatboi::where('user_id',$profileId)->first();

        if($chatbox){
            return response()->json(['chatbox_id'=>$chatbox_id]);
        } else{
            $newChatbox=Chatbox::create([
                'admin_id' => $authId,
                'name' => "Default",
            ]);

            Chatbois::create([
                'user_id' => $authId,
                'chatbox_id' => $newChatbox->id,
            ]);
    
            Chatbois::create([
                'user_id' => $profileId,
                'chatbox_id' => $newChatbox->id,
            ]);

            return response()->json(['chatbox_id'=>$newChatbox->id]);
        }
    }
    

    
}
