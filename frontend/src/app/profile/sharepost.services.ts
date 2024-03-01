import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './profile.component';

@Injectable({
  providedIn: 'root'
})
export class SharePostDialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(post_id: string, description: string): void {
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '400px', // Set dialog width as needed
      data: { post_id, description } // Pass data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If dialog result is true, proceed to share post
        // Implement share post functionality here
      } else {
        console.log('User canceled sharing post.');
      }
    });
  }
}
