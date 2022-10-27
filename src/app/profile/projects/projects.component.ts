import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConstantInfoService } from '../constant-info.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  constructor(private _constants:ConstantInfoService) { }

  public projects:any;
  public title:String="Projects";
  public panelOpenState:any=true;
  public months:any;

  ngOnInit(): void {
    this.projects=this._constants.PROJECTS.sort((a:any,b:any)=>b.month-a.month);
    this.months = this._constants.MONTHS;
  }

}
