import { Component, OnInit } from '@angular/core';
import { ConstantInfoService } from '../constant-info.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _constant:ConstantInfoService) { }

  public title:String="Contact Me";
  public contacts:any;

  ngOnInit(): void {
    this.contacts=this._constant.PERSONAL_INFO;
  }


}
