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
  id: any; 
  userID: any;

  authuser: any
  auth_id=""
  auth:boolean=false
  profile_id=""
  user:any
  hobbies:any
  hobby=""


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
      this.http.get(`http://localhost:8000/api/gethobby/${this.userID}`).subscribe(
        (res: any) => {
          this.hobbies=res

        },
        (error) => {
        }
      );


    });




  }
  
  addHobbies() {
    const formData = new FormData();
    formData.append('type',this.type); 
    formData.append('user_id',this.userID); 
  
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


  saveHobby(id: string,type: string){
    {
    const formData = new FormData();
  
    // Add other fields to FormData
    formData.append('id', id);
    formData.append('type', type);

    console.log(formData)

    this.http.post("http://localhost:8000/api/hobbies-edit",formData).subscribe((resultData: any)=> 
      {
  
          console.log(resultData)
  
      });

    }
  }


  
}
