import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReadComponent } from './read.component';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private dialog:MatDialog) { }

  open(){

    this.dialog.open(ReadComponent)

  }
}
