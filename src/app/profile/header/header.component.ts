import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'app';
  navLinks: any[]=[];
  activeLinkIndex = -1;

  constructor(private router:Router) { 
    this.navLinks = [
      {
          label: 'About',
          link: './about',
          index: 0
      }, {
          label: 'Education',
          link: './education',
          index: 1
      }, {
          label: 'Tab Test3',
          link: './tabtest3',
          index: 2
      }, 
  ];
  }

  background: ThemePalette = undefined;
  tabSide = ["center","end"];
  ngOnInit(): void {
    this.background = this.background ? undefined : 'primary';
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });


  }
  change(event:any){
    console.log(event);
  }
 
}
