import { Component, OnInit } from '@angular/core';
import { CreateService } from '../create/create.service';
import { DataService } from '../data.service';
import { DeleteService } from '../delete/delete.service';
import { UpdateService } from '../update/update.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  items:Array<any>=[]

  constructor(public dataService :DataService,
    public updateService:UpdateService,
    public deleteService:DeleteService,
    public createService:CreateService) {
    this.loadData();
   }

  ngOnInit(): void {
    
  }
  loadData(){
    this.dataService.getAll().subscribe(data=>this.items = data["_items"]);
}
  update(item: any){
    this.updateService.open(item)
  }
  delete(item:any){
    this.deleteService.open(item)
  }
  create() {
    this.createService.open()
  }
}