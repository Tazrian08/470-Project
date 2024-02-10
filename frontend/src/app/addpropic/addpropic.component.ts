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

 
  constructor(private sanitizer: DomSanitizer,@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddpropicComponent>){}


  imageUrl!: SafeUrl;



  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.previewImage(file);
  }

  previewImage(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
    };
  }

  upload(): void {
    // Implement your upload logic here
    // Typically, you would send the file to a server using HTTP POST request
    // You can use Angular's HttpClient for that
  }
  register() {
    // Add your register logic here if needed

    // Close the dialog when registration is complete
    this.dialogRef.close();
  }




}
