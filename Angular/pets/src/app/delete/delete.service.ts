import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteComponent } from './delete.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor( private dialog: MatDialog ) {
    
  }
   
  open(item: any) {
      
    const dialogConfig = new MatDialogConfig()
      
    dialogConfig.data = {
      item: item,
        
    }
      
    this.dialog.open(DeleteComponent, dialogConfig)
  }
  
}
  



