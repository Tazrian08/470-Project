import { Injectable } from '@angular/core';
import { MatDialog ,MatDialogConfig,MatDialogRef } from '@angular/material/dialog';
import { AddpropicComponent } from './addpropic.component';


@Injectable({
  providedIn: 'root'
})
export class PropicService {

  dialogRef!: MatDialogRef<AddpropicComponent>;


  constructor(private dialog: MatDialog) { }

  openDialog(id:string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%';
    dialogConfig.height = '80%';
    dialogConfig.maxWidth = '90%';
    dialogConfig.maxHeight = '90%';
    dialogConfig.position = {
      top: '0%',
      left: '20%',
      // transform: 'translate(-50%, -50%)'
    };

    dialogConfig.data = { id: id };

    this.dialogRef = this.dialog.open(AddpropicComponent, dialogConfig,);
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
