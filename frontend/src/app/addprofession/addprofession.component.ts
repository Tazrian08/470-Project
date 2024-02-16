import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  end_date: any;

  userID:any

constructor(private http: HttpClient, private router: Router, private calendar: NgbCalendar, private route: ActivatedRoute)
  {
    this.start_date = this.calendar.getToday();
  }

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

  addprofession(){
    {

      const formData = new FormData();

    // Add other fields to FormData
    formData.append('user_id', this.userID);
    formData.append('company', this.company);
    formData.append('position', this.position);
    const formattedStartDate = this.start_date_format(this.start_date);
    formData.append('start_date', formattedStartDate);
    const formattedEndDate = this.end_date_format(this.end_date);
    formData.append('end_date', formattedEndDate);
    // Convert NgbDateStruct to a string in a specific format


    console.log(formData)





      this.http.post("http://localhost:8000/api/addprofession",formData).subscribe((resultData: any)=>
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


  private start_date_format(start_date: NgbDateStruct): string {
    if (start_date) {
      // Format the date as needed (e.g., YYYY-MM-DD)
      const formattedDate = `${start_date.year}-${start_date.month}-${start_date.day}`;
      return formattedDate;
    }
    return "";
  }
  private end_date_format(end_date: NgbDateStruct): string {
    if (end_date) {
      // Format the date as needed (e.g., YYYY-MM-DD)
      const formattedDate = `${end_date.year}-${end_date.month}-${end_date.day}`;
      return formattedDate;
    }
    return "";
  }
}

