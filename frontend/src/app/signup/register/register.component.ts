import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name=""
  username=""
  email=""
  password=""
  blood_type=""
  gender=""
  contact=""
  about=""

  constructor(private http: HttpClient, private router: Router ) 
  {

  }

  register(){
    {
    
   
      let bodyData = {
        "name" : this.name,
        "email" : this.email,
        "password" : this.password,
        "username": this.username,
        "blood_type": this.blood_type,
        "gender": this.gender,
        "contact":this.contact,
        "about": this.about,
      };
  
  
      this.http.post("http://localhost:8000/api/register",bodyData).subscribe((resultData: any)=> 
      {
  
          alert(resultData["message"] + resultData["user"].name + " has been registered")
          this.router.navigate(['/login'])
  
      });
      console.log("This runs")
      
    }
  }

}
