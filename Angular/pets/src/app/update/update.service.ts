import { Injectable } from '@angular/core';
import { UpdateComponent } from './update.component'
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

    constructor(
      private dialog: MatDialog,
    ) { }

    open(item: any) {
      const dialogConfig = new MatDialogConfig()
      dialogConfig.data = {
        item: item
      }
      this.dialog.open(UpdateComponent, dialogConfig)
      
    }
  
}