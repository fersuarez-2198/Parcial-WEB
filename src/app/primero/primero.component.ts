import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit {
  isHome = true;
  isServices = false;
  isAbout = false;
  isContact = false;
  isFAQ = false;

  constructor() { }
  ngOnInit(): void {
  }



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
