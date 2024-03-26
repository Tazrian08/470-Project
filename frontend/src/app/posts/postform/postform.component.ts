import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Emitters } from 'src/app/Emitters/emitters';


@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent {
  description = '';
  selectedFilesArray: File[] = [];
  auth_id=""
  auth:boolean=false
  constructor(public dialogRef: MatDialogRef<PostformComponent>, private http: HttpClient, ) {}


  ngOnInit(): void {

    

    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        this.auth_id = res.id;
        Emitters.authEmitter.emit(true);
      });
    Emitters.authEmitter.subscribe(
      (data: any) => {
        this.auth= data;
      });
    


  }

  createPost() {




    if (!this.description) {
      console.error('Description is required.');
      return;
    }
    const formData = new FormData();
    formData.append('user_id', this.auth_id);
    formData.append('description', this.description);

    if (this.selectedFilesArray.length > 0) {
      for (let i = 0; i < this.selectedFilesArray.length; i++) {
          formData.append('files_'+i, this.selectedFilesArray[i]);
      }
  }
  console.log(formData)
    // Send the formData to the backend
    this.http.post("http://localhost:8000/api/post/create", formData).subscribe(
      (response) => {
        console.log('Post created successfully:', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error creating post:', error);
      }
    );
  }


  onFileSelected(event: any) {
    const files = event.target.files;
    if (files) {
        for (let i = 0; i < files.length; i++) {
            this.selectedFilesArray.push(files[i]);
        }
    }
  }

  
}
