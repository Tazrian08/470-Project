import { Injectable } from '@angular/core';
import { PostformComponent } from './postform/postform.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PostformdialogueService {


  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(PostformComponent, {
      width: '80%',
      height: '80%',
      maxWidth: '800px',
      maxHeight: '600px'
    });
  }
}
