import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent {
  description = '';
  selectedFiles: FileList | null = null;
  selectedFilesArray: File[] = [];

  constructor(public dialogRef: MatDialogRef<PostformComponent>, private http: HttpClient) {}

  createPost() {


    console.log(this.selectedFilesArray)


    if (!this.description) {
      console.error('Description is required.');
      return;
    }
    const formData = new FormData();
    formData.append('description', this.description);

    if (this.selectedFilesArray.length > 0) {
      for (let i = 0; i < this.selectedFilesArray.length; i++) {
          formData.append('files', this.selectedFilesArray[i]);
      }
  }
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
