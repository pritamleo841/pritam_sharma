import { Component, ElementRef, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private elementRef: ElementRef) {}

  public background:ThemePalette='primary';

  // public color:string='';
  // public bgColor:string='';
  public date:any;
  public ngOnInit(): void {
    this.date= new Date();
    
  }

  // public toggle(event:any){
  //   if(event.checked){
  //     this.color='white';
  //     this.bgColor=' #121212';
  //   }
  //   else{
  //     this.color='#121212';
  //     this.bgColor='white';
  //   }
  //   this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.bgColor;
  //   this.elementRef.nativeElement.ownerDocument.body.style.color = this.color;
  // }
}
