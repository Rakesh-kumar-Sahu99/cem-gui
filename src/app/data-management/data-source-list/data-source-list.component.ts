import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataSourceFormComponent } from '../data-source-form/data-source-form.component';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-data-source-list',
  templateUrl: './data-source-list.component.html',
  styleUrl: './data-source-list.component.css'
})
export class DataSourceListComponent {

  title = "Data Source List";
  public data:any =[];
  public colDefs: ColDef[] = [
    { field: "DB_TYPE" },
    { field: "HostName" },
    { field: "Name" },
    { field: "Port" },
    {field: "UserName"},
    {field: "Password"}
  ];

  public tableConfiguration: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
    autoHeight: true
  };
  // public displayForm:boolean=false;
  constructor(private dialog:MatDialog){
    this.data = [
        {
          DB_TYPE : "Oracle",
          HostName : "localhost",
          Name:"springboot",
          Port:"8080",
          UserName:"root",
          Password:"root"
        },
        {
          DB_TYPE : "MySQL",
          HostName : "localhost",
          Name:"springboot",
          Port:"8081",
          UserName:"root",
          Password:"1234"
        }]

  }



  openDataSourceForm(){
    // this.displayForm=true;
    let dialogRef = this.dialog.open(DataSourceFormComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
