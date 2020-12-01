import { Injectable } from '@angular/core';
import { CreateComponent } from './create.component'
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(
    private dialog: MatDialog,
  ) { }

  open() {
    
    this.dialog.open(CreateComponent)

  }


}