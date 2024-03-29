import { Component, HostListener } from '@angular/core';
import { Emitters } from '../Emitters/emitters';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user: any;
  auth: boolean = false;
  profile_id = "";
  posts: any[] = [];
  currentPage = 1;
  pageSize = 10;

  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute){}




  ngOnInit(): void {

    this.loadPosts();

    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res)
        this.user=res

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
      this.http.get(`http://localhost:8000/api/posts/${this.profile_id}?page=${this.currentPage}&pageSize=${this.pageSize}`).subscribe(
        (data: any) => {
          this.posts.push(...data); // Append new posts to existing ones
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



}
