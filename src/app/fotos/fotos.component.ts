import { Component, OnInit } from '@angular/core';
import sampleData from '../../assets/data.json';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  Users: any = sampleData;

  constructor() { }

  ngOnInit() {
  }

}
