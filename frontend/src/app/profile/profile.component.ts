import { Component, HostListener } from '@angular/core';
import { Emitters } from '../Emitters/emitters';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PostformdialogueService } from '../posts/postformdialogue.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  authuser: any
  user: any;
  auth: boolean = false;
  profile_id = "";
  posts: any[] = [];
  currentPage = 1;
  pageSize = 10;
  name : any;
  email : any;
  username : any;
  dob : any;
  gender : any;
  contact : any;
  blood : any;
  about : any;





  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,private dialogService: PostformdialogueService){}




  ngOnInit(): void {

    this.loadPosts();

    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res)
        this.authuser=res
        console.log(res.name)
        Emitters.authEmitter.emit(true);
      });
    Emitters.authEmitter.subscribe(
      (data: any) => {
        this.auth= data;
      });

  }
  loadPosts() {
    this.route.params.subscribe(params => {
      this.profile_id = params['id'];
      this.http.get(`http://localhost:8000/api/profuser/${this.profile_id}?page=${this.currentPage}&pageSize=${this.pageSize}`).subscribe(
        (data: any) => {
        console.log(data)
        this.user=data[0]
        this.name= data[0].name;
        this.email =data[0].email;
        this.username =data[0].username;
        this.dob =data[0].dob;
        this.gender =data[0].gender;
        this.contact =data[0].contact
        this.blood =data[0].blood_type;
        this.about =data[0].about;
        this.posts.push(...data[0].post); 
        console.log(this.posts);
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
  const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  const max = document.documentElement.scrollHeight;
  console.log('Current position:', pos);
  console.log('Maximum position:', max);
  if (pos === max) {
    console.log('Reached bottom of page!');
    // Load more posts when scrolled to the bottom
    this.currentPage++;
    this.loadPosts();
  }
}

openDialog(): void {
  this.dialogService.openDialog();
}

closeDialog(): void {
  this.dialogService.closeDialog();
}





}
