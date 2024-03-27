<?php

namespace App\Http\Controllers;

use App\Events\chat;
use App\Models\User;
use App\Models\Chatboi;
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
    public function index($id){
        $chatbox=Chatbox::where('id',$id)
        ->with('message','message.user')
        ->get();
        return response()->json($chatbox);
    }

    public function message(Request $request)
    {
       
       $authId = $request->input('auth_id');
      
       $messageContent = $request->input('message');

      
       $message = Message::create([
           'sender_id' => $authId,
           'chatbox_id'=>4,
           'message' => $messageContent,
       ]);

       
       if ($message) {
     
           event(new chat($message,2));

          
           return response()->json(['message' => 'Message sent successfully'], 200);
       } else {
          
           return response()->json(['message' => 'Failed to send message'], 500);
       }

    }

    public function checkChatbox($profileId, $authId)
    {
        $chatbox = Chatbox::whereHas('chatboi', function($query) use ($profileId, $authId) {
            $query->whereIn('user_id', [$profileId, $authId])
                  ->havingRaw('COUNT(DISTINCT user_id) = 2');
        })
        ->has('chatboi', '=', 2)
        ->get();

        $auth_user=User::where("id",$authId)->get();
        $pro_user=User::where("id",$profileId)->get();



        if($chatbox->isNotEmpty()){
            return response()->json(['chatbox_id'=>$chatbox[0]->id]);
        } else{
            $name=$auth_user[0]->name . "-" . $pro_user[0]->name;
            $newChatbox=Chatbox::create([
                'admin_id' => $authId,
                'name' => $name,
            ]);

            Chatboi::create([
                'user_id' => $authId,
                'chatbox_id' => $newChatbox->id,
            ]);
    
            Chatboi::create([
                'user_id' => $profileId,
                'chatbox_id' => $newChatbox->id,
            ]);

            return response()->json(['chatbox_id'=>$newChatbox->id]);
        }
    }
    

    
}
