import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConstantInfoService } from '../constant-info.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  constructor(private _constants:ConstantInfoService) { }
  public title:String="Skills";
  public skills:any;

  ngOnInit(): void {
    this.skills=this._constants.SKILLS;
  }

}
