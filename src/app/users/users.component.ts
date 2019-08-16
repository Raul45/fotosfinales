import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  ojala: any;
  constructor(public dataServ: DataService) { }

  ngOnInit() {
    return this.dataServ.getPosts().subscribe(data=> this.ojala = data);
    
  }

}
