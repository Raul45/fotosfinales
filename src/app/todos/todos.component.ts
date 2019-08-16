import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  ojala: any;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getTodos().subscribe(data=> {this.ojala = data
        debugger}
      );
   
  }

}
