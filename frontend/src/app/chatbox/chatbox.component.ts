import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Emitters } from '../Emitters/emitters';
import { ActivatedRoute } from '@angular/router';
import Pusher from 'pusher-js';




@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {
  username = 'username';
  message = '';
  messages: any[] = [];

  authuser: any
  user: any;
  auth: boolean = false;
  receiver_id: any;
  auth_id : any;
  profile_id:any;
  flag:boolean=true


  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.profileload();
    

    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        this.authuser=res;
        this.auth_id = res.id;
        Emitters.authEmitter.emit(true);
      });
    Emitters.authEmitter.subscribe(
      (data: any) => {
        this.auth= data;
      });
    


  // }
  
  // profileload() {
  //   this.route.params.subscribe(params => {
  //     this.profile_id = params['id'];
      
  //     this.http.get(`http://localhost:8000/api/profuser/${this.profile_id}?page=${this.currentPage}&pageSize=${this.pageSize}`).subscribe(
  //       (data: any) => {
  //       this.user=data.user[0]
       
  //       // this.posts.push(...data[0].post); 
  //       console.log(this.user)
       
        
  //       // console.log(this.posts);
  //       });
  //   });
  
   // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    const pusher = new Pusher('7472def7708140194de7', {
      cluster: 'ap1'
    });

    const channel = pusher.subscribe('chatbox');
    channel.bind('chat', (data: any) => { // Specify the type of 'data'
      this.messages.push(data);
    });
  }

  submit(): void {
    const formData = new FormData();
    formData.append('auth_id',this.auth_id); 
    formData.append('receiver_id',this.receiver_id);
    formData.append('message',this.message);
  
    this.http.post("http://localhost:8000/api/messages", formData).subscribe(
      (resultData: any) => {
        console.log(resultData); 
        this.message= '';
        alert("sent");
      },
      (error: any) => {
        console.error('Error sending:', error);
      }
    );
  
  
}
}
