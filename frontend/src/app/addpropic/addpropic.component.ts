import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropicService } from './propic.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-addpropic',
  templateUrl: './addpropic.component.html',
  styleUrls: ['./addpropic.component.css']
})
export class AddpropicComponent {

 
  constructor(private sanitizer: DomSanitizer,@Inject(MAT_DIALOG_DATA) public data: any,private http: HttpClient, public dialogRef: MatDialogRef<AddpropicComponent>){}


  imageUrl!: SafeUrl;

  selectedFile: any

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.previewImage(this.selectedFile);
  }

  previewImage(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
    };
  }

  upload(): void {
    const formData = new FormData();
    formData.append('id', this.data.id);

    // Append the existing form data


    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }


    this.http.post("http://localhost:8000/api/propic/create",formData).subscribe((resultData: any)=> 
    {

        console.log(resultData)
        // this.router.navigate(['/login'])

    });
  }
  register() {
    // Add your register logic here if needed

    // Close the dialog when registration is complete
    this.dialogRef.close();
  }




}
