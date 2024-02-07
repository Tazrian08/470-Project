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
  id=""
  auth: boolean=false

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
          Emitters.authEmitter.emit(true);
          this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
          (res: any) => {
          console.log(res)
          this.id=res.id

        Emitters.authEmitter.emit(true);
      });
    Emitters.authEmitter.subscribe(
      (data: any) => {
        this.auth= data;
      });
          this.goToProfile()
      }
          


      });
      console.log("This runs")
      
    
  }

  goToProfile(): void {
    this.router.navigate(['/profile', this.id]);

  }
}
