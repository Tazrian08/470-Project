import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hobbyadd',
  templateUrl: './hobbyadd.component.html',
  styleUrls: ['./hobbyadd.component.css']
})
export class HobbyaddComponent {
  type: any; 
  hobby: any;
  id: any; 
  userID: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
   
    this.route.params.subscribe(params => {
      this.userID = +params['id']; 
  
      this.http.get('http://localhost:8000/api/user', { withCredentials: true }).subscribe(
        (res: any) => {
          console.log(res);
          console.log(this.userID);
        },
        (error) => {
          console.error('Error fetching user profile:', error);
        }
      );
    });
  }
  
  addHobbies() {
    const formData = new FormData();
    formData.append('type',this.type); 
  
    this.http.post("http://localhost:8000/api/hobbies", formData).subscribe(
      (resultData: any) => {
        console.log(resultData); 
        alert("Hobby has been registered successfully");
      },
      (error: any) => {
        console.error('Error adding hobby:', error);
      }
    );
  }
  
}
