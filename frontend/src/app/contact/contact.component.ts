import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emitters } from '../Emitters/emitters';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

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
    contact : any;
    id=""
   
    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute){}
  
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
        this.http.get(`http://localhost:8000/api/contact/${this.profile_id}?page=${this.currentPage}&pageSize=${this.pageSize}`).subscribe(
          (data: any) => {
          console.log(data)
          this.user=data[0]
          this.id=data[0].id;
          
          this.email =data[0].email;
         
          this.contact =data[0].contact
        
          });
      });
    }

}
