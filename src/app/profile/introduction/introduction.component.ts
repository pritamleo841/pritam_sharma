import { Component, OnInit } from '@angular/core';
import { ConstantInfoService } from '../constant-info.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  date: any='';

  constructor(private _constant:ConstantInfoService) { }

  public title:String = "About Me";
  public personalInfo:any;
  public fullName:any;
  public dob:any;

  ngOnInit(): void {
    this.personalInfo = this._constant.PERSONAL_INFO;
    this.fullName = `Hello, my name is ${this.personalInfo.firstName+' '+this.personalInfo.lastName}. `;
    this.dob = `${this.personalInfo.day}th,${this.personalInfo.month},${this.personalInfo.year}`;
    this.date= new Date();

  }

}
