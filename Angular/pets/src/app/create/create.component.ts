import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(public dataService:DataService,private dialogRef: MatDialogRef<CreateComponent>) {

   }
   myFormGroup: any

  ngOnInit(): void {
    this.loadForm();  
  }
 
  loadForm() {
    const group = {}
    group["name"] = new FormControl('')
    group["description"] = new FormControl('')
    this.myFormGroup = new FormGroup(group)
 }

 save() {
  const formData = new FormData()
  if (!this.myFormGroup.get("name").untouched) {
     formData.append("name", this.myFormGroup.get("name").value)
  }
  if (!this.myFormGroup.get("description").untouched) {        
     formData.append("description",
        this.myFormGroup.get("description").value)
  }
  this.dataService.add(formData).subscribe(data => {
     console.log(data)
     this.dialogRef.close("close");
  })
}
}
