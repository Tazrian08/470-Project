import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

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
  date: NgbDateStruct;

  constructor(private http: HttpClient, private router: Router, private calendar: NgbCalendar) 
  {
    this.date = this.calendar.getToday();
  }

  register(){
    {

      const formData = new FormData();
  
    // Add other fields to FormData
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('username', this.username);
    formData.append('blood_type', this.blood_type);
    formData.append('gender', this.gender);
    formData.append('contact', this.contact);
    formData.append('about', this.about);
  
    // Convert NgbDateStruct to a string in a specific format
    const formattedDate = this.formatNgbDate(this.date);
    formData.append('date', formattedDate);
    
   
      // let bodyData = {
      //   "name" : this.name,
      //   "email" : this.email,
      //   "password" : this.password,
      //   "username": this.username,
      //   "blood_type": this.blood_type,
      //   "gender": this.gender,
      //   "contact":this.contact,
      //   "about": this.about,
      // };
  
  
      this.http.post("http://localhost:8000/api/register",formData).subscribe((resultData: any)=> 
      {
  
          alert(resultData["message"] + resultData["user"].name + " has been registered")
          this.router.navigate(['/login'])
  
      });
      console.log("This runs")
      
    }
  }

  private formatNgbDate(date: NgbDateStruct): string {
    if (date) {
      // Format the date as needed (e.g., YYYY-MM-DD)
      const formattedDate = `${date.year}-${date.month}-${date.day}`;
      return formattedDate;
    }
    return "";
  }

}
