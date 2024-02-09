import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent {
  username = "";
  name = "";
  email = "";

  constructor(public dialogRef: MatDialogRef<PostformComponent>) {}

  register() {
    // Add your register logic here if needed

    // Close the dialog when registration is complete
    this.dialogRef.close();
  }

}
