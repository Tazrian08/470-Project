import { Component, HostListener } from '@angular/core';
import { Emitters } from '../Emitters/emitters';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PostformdialogueService } from '../posts/postformdialogue.service';
import { PropicService } from '../addpropic/propic.service';

import { UserService } from '../profile/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  authuser: any
  user: any;
  auth: boolean = false;
  profile_id : any;
  posts: any[] = [];
  currentPage = 1;
  pageSize = 5;
  name : any;
  email : any;
  username : any;
  dob : any;
  gender : any;
  contact : any;
  blood : any;
  about : any;
  id : any;
  auth_id : any;
  follow:boolean=false
  profilepic:any
  total_follower: any;

  auth_followed: any;

  profile_follower:any





  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,private dialogService: PostformdialogueService, 
    private dialogService1: PropicService, private userService: UserService){}




  ngOnInit(): void {

    this.profileload();
    

    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        this.authuser=res;
        this.auth_id = res.id;
        this.auth_followed = res.follower;
        Emitters.authEmitter.emit(true);
      });
    Emitters.authEmitter.subscribe(
      (data: any) => {
        this.auth= data;
      });
    


  }
  
  profileload() {
    this.route.params.subscribe(params => {
      this.profile_id = params['id'];
      
      this.http.get(`http://localhost:8000/api/profuser/${this.profile_id}?page=${this.currentPage}&pageSize=${this.pageSize}`).subscribe(
        (data: any) => {
        this.user=data.user[0]
        this.id=data.user[0].id;
        this.name= data.user[0].name;
        this.email =data.user[0].email;
        this.username =data.user[0].username;
        this.dob =data.user[0].dob;
        this.gender =data.user[0].gender;
        this.contact =data.user[0].contact
        this.blood =data.user[0].blood_type;
        this.about =data.user[0].about;
        this.profilepic =data.user[0].profilepic[0];
        this.posts=data.posts
        // this.posts.push(...data[0].post); 
        console.log(this.posts)
       
        this.profile_follower=data.user[0].followed
        // console.log(this.posts);
        });
    });
  }
  

  // Function to detect scroll to the bottom of the page
  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: any) {
  //   const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  //   const max = document.documentElement.scrollHeight;
  //   if (pos === max) {
  //     // Load more posts when scrolled to the bottom
  //     this.currentPage++;
  //     this.loadPosts();
  //   }
  // }


  //TEST
  @HostListener('window:scroll', ['$event'])
onScroll(event: any) {
  console.log('Scroll event detected!');
  let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  let max = document.documentElement.scrollHeight;
  // console.log('Current position:', pos);
  // console.log('Maximum position:', max);
  if (pos === max) {
    console.log('Reached bottom of page!');
    // Load more posts when scrolled to the bottom
    this.currentPage++;
    
    this.loadPosts();
    pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    max = document.documentElement.scrollHeight;
  }
}

openDialog(): void {
  this.dialogService.openDialog();
}

closeDialog(): void {
  this.dialogService.closeDialog();
}


openpropic(): void {
  
  this.dialogService1.openDialog(this.id);
}

closepropic(): void {
  this.dialogService1.closeDialog();
}



goToskillform(id: string){

  this.router.navigate(['/skills-form', this.id]);

}
followUser(userId: string) {
  const formData = new FormData();
    formData.append('followed_id',this.profile_id); 
    formData.append('follower_id',this.auth_id); 
  
    this.http.post("http://localhost:8000/api/follow", formData).subscribe(
      (resultData: any) => {
        console.log(resultData); 
        this.follow= true;
        alert("followed");
      },
      (error: any) => {
        console.error('Error following:', error);
      }
    );

}

loadPosts() {



  this.http.get(`http://localhost:8000/api/loadposts?id=${this.profile_id}&skip=${this.posts.length}`).subscribe(
    (data: any) => {
this.posts.push(...data);
console.log(this.posts)


})
}


}
