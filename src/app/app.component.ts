import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parcial';
  isHome = true;
  isServices = false;
  isAbout = false;
  isContact = false;
  isFAQ = false;


  home() {
    this.isHome = true;
    this.isServices = false;
    this.isAbout = false;
    this.isContact = false;
    this.isFAQ = false;
  }
  services() {
    this.isHome = false;
    this.isServices = true;
    this.isAbout = false;
    this.isContact = false;
    this.isFAQ = false;
  }
  about() {
    this.isHome = false;
    this.isServices = false;
    this.isAbout = true;
    this.isContact = false;
    this.isFAQ = false;
  }
  contact() {
    this.isHome = false;
    this.isServices = false;
    this.isAbout = false;
    this.isContact = true;
    this.isFAQ = false;
  }
  FAQ() {
    this.isHome = false;
    this.isServices = false;
    this.isAbout = false;
    this.isContact = false;
    this.isFAQ = true;
  }
}