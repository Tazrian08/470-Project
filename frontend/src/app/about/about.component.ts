import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostformdialogueService } from '../posts/postformdialogue.service';
import { PropicService } from '../addpropic/propic.service';
import { Emitters } from '../Emitters/emitters';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{

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
  id=""
  hobbies: any;
  profession: any;
  skills: any;





  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute ,private dialogService: PostformdialogueService,private dialogService1: PropicService){}




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
      this.http.get(`http://localhost:8000/api/about/${this.profile_id}?page=${this.currentPage}&pageSize=${this.pageSize}`).subscribe(
        (data: any) => {
        console.log(data)
        this.user=data[0]
        this.id=data[0].id;
        this.name= data[0].name;
        this.email =data[0].email;
        this.username =data[0].username;
        this.dob =data[0].dob;
        this.gender =data[0].gender;
        this.contact =data[0].contact
        this.blood =data[0].blood_type;
        this.about =data[0].about;
        this.posts.push(...data[0].post); 
        this.hobbies=data[0].hobby;
        this.profession = data[0].profession;
        this.skills = data[0].skill;
        console.log(this.skills[0]);
        console.log(this.profession[0]);
        console.log(this.hobbies[0]);
        console.log(this.posts);
        });
    });
  }
  formatHobbies(hobbies: string[]): string {
    if (this.hobbies.length === 0) {
      return '';
    } else if (this.hobbies.length === 1) {
      return this.hobbies[0];
    } else {
      const lastHobby = this.hobbies.pop();
      return this.hobbies.join(', ') + ' and ' + lastHobby;
    }

  }
  

  }
