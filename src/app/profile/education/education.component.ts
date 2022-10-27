import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ConstantInfoService } from '../constant-info.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit,AfterViewInit {

  public displayedColumns: string[] = ['year','examination','name','location','average'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any[]>([]);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  public title:String="Education";
  public educationInfo:any;

  constructor(private _constant:ConstantInfoService) { }

 
  ngOnInit(): void {
    this.educationInfo=this._constant.EDUCATION;
    this.dataSource = new MatTableDataSource(this.educationInfo.reverse());
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

}
