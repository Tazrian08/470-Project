import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Emitters } from '../Emitters/emitters';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent {
  // skills: string[] = [];

  constructor(private http: HttpClient, private router: Router,  private route: ActivatedRoute ) {}


  authuser: any
  auth_id=""
  auth:boolean=false
  profile_id=""
  user:any
  skills:any
  skill=""
  skill_id=""

  ngOnInit(): void {

    this.loadUser();

    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res)
        this.authuser=res;
        console.log(res.name)
        this.auth_id = res.id;
        Emitters.authEmitter.emit(true);
      });
    Emitters.authEmitter.subscribe(
      (data: any) => {
        this.auth= data;
      });

  }


  loadUser() {
    this.route.params.subscribe(params => {
      this.profile_id = params['id'];
      
      this.http.get(`http://localhost:8000/api/profuser/${this.profile_id}`).subscribe(
        (data: any) => {
        console.log(data)
        this.user=data[0]
        this.skills=this.user.skill





        console.log(this.skills);
        });
    });
  }



 

  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }

  addSkill() {
   {

      const formData = new FormData();
  
    // Add other fields to FormData
    formData.append('user_id', this.profile_id);
    formData.append('type', this.skill);
    // Convert NgbDateStruct to a string in a specific format

    
   
 
  
      this.http.post("http://localhost:8000/api/skills-form",formData).subscribe((resultData: any)=> 
      {
  
          console.log(resultData)
  
      });
      console.log("This runs")
      
    }
  }


  saveSkill(id: string,type: string){
    {
    const formData = new FormData();
  
    // Add other fields to FormData
    formData.append('id', id);
    formData.append('type', type);

    console.log(formData)

    this.http.post("http://localhost:8000/api/skills-edit",formData).subscribe((resultData: any)=> 
      {
  
          console.log(resultData)
  
      });

    }
  }
}
