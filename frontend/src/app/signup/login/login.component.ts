import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/Emitters/emitters';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) 
  {
    
  }

  Login: boolean =true
  email: string ="";
  password: string ="";

  login(){
    
    
   
      let bodyData = {
        "email" : this.email,
        "password" : this.password,
      };
  
  
      this.http.post("http://localhost:8000/api/login",bodyData,{withCredentials: true}).subscribe((resultData: any)=>
      { console.log(resultData)
        if (resultData["flag"]==true) {
          alert('Login failed. Enter Valid username and/or Password')
      } else {
        console.log(resultData)
          //alert(resultData['user'].name + " has been logged in");
          Emitters.authEmitter.emit(true);
          //Emitters.dataEmitter.emit(resultData['user']) FOR SENDING DATA TO ANOTHER COMPONENT
          this.router.navigate(['/profile'])
      }
          


      });
      console.log("This runs")
      
    
  }
}
