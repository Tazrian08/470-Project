import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent {
  skills: string[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  addSkill() {
    this.skills.push('');
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }

  saveSkills() {
    const apiUrl = 'http://localhost:8000/api/skills-form'; // Adjust the URL as per your Laravel backend
    const formData = {}; // Assuming you have data to send along with the request

    this.http.post(apiUrl, formData).subscribe(
      (resultData: any) => {
        alert(resultData.message + resultData.user.name + ' has been registered');
        this.router.navigate(['/']); // Navigate to appropriate route after successful skill save
      },
      error => {
        console.error('Error saving skills:', error);
        // Handle error
      }
    );

    console.log('This runs');
  }
}
