import { Injectable } from '@angular/core';
import { PostformComponent } from './postform/postform.component';
import { MatDialog ,MatDialogConfig,MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PostformdialogueService {

  dialogRef!: MatDialogRef<PostformComponent>;


  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%';
    dialogConfig.height = '100%';
    dialogConfig.maxWidth = '90%';
    dialogConfig.maxHeight = '100%';
    dialogConfig.position = {
      top: '0%',
      left: '20%',
      // transform: 'translate(-50%, -50%)'
    };

    this.dialogRef = this.dialog.open(PostformComponent, dialogConfig);
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
