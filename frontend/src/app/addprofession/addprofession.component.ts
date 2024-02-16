import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateStruct, NgbDateStructAdapter, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-addprofession',
  templateUrl: './addprofession.component.html',
  styleUrls: ['./addprofession.component.css']
})
export class AddprofessionComponent {
  isChecked: boolean = true;

  company="";
  position="";
  start_date: NgbDateStruct;
  end_date= null;

constructor(private http: HttpClient, private router: Router, private calendar: NgbCalendar)
  {
    this.start_date = this.calendar.getToday();
  }

  addprofession(){
    {

      const formData = new FormData();

    // Add other fields to FormData
    formData.append('user_id', this.company);
    formData.append('type', this.position);
    // Convert NgbDateStruct to a string in a specific format





      this.http.post("http://localhost:8000/api/skills-form",formData).subscribe((resultData: any)=>
      {

          console.log(resultData)

      });
      console.log("This runs")

    }
  }

  toggleflag(){
    if (this.isChecked==false){
      this.isChecked=true
    }
    else {
      this.isChecked=false
    }
  }
}

