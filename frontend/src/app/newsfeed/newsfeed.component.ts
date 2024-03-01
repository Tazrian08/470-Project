import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emitters } from '../Emitters/emitters';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent {


  authuser:any
  auth:boolean=false
  posts:any

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {


    this.http.get('http://localhost:8000/api/userfeed', {withCredentials: true}).subscribe(
      (res: any) => {
        this.authuser=res[0];
        this.posts=res[1]
        console.log(this.posts)

        Emitters.authEmitter.emit(true);
      });
    Emitters.authEmitter.subscribe(
      (data: any) => {
        this.auth= data;
      });
    
  }

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
      
      this.loadfeed();
      pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
      max = document.documentElement.scrollHeight;
    }
  }

  loadfeed() {

    this.http.get(`http://localhost:8000/api/loadfeed?id=${this.authuser.id}&skip=${this.posts.length}`).subscribe(
      (data: any) => {
  this.posts.push(...data);
  console.log(this.posts)
  
  
  })
  }



}
