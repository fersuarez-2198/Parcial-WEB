import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parcial';
  isPrimero: boolean = false;
  isSegundo: boolean = true;


  showPrimero(){
    this.isPrimero = true;
    this.isSegundo = false;
 
  }

  showSegundo(){
    this.isPrimero = false;
    this.isSegundo = true;
 
  }
}