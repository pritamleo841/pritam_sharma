import { Component, OnInit } from '@angular/core';
import { ConstantInfoService } from '../constant-info.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private _constants:ConstantInfoService) { }

  public title:String="Experience";
  public panelOpenState = true;
  public experience:any;
  public months:any;
  
  ngOnInit(): void {
    this.experience=this._constants.EXPERIENCE.sort((a:any,b:any)=>b.startDate.year-a.startDate.xyear).sort((a:any,b:any)=>b.startDate.month-a.startDate.month);
    this.months = this._constants.MONTHS;
  }

}
