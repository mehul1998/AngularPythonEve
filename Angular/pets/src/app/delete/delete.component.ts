import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  item:any;
  myFormGroup:any;

  constructor(public dataService:DataService,private dialogRef:MatDialogRef<DeleteComponent>,@Inject(MAT_DIALOG_DATA) data:any) {
    this.item=data.item;
   }

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm() {
    const group = {}
    group["name"] = new FormControl(
       {value: this.item.name, disabled: true}
    )
    group["description"] = new FormControl(
       {value:     this.item.description, disabled: true}
    )
    this.myFormGroup = new FormGroup(group)
 }
 
  delete(){
    this.dataService.delete(this.item._id).subscribe(data=>{
      console.log(data)
      this.dialogRef.close("close")
   })
  }
}
