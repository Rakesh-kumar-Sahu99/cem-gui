import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataSourceFormComponent } from '../data-source-form/data-source-form.component';

@Component({
  selector: 'app-data-source-list',
  templateUrl: './data-source-list.component.html',
  styleUrl: './data-source-list.component.css'
})
export class DataSourceListComponent {

  title = "Data Source List";
  // public displayForm:boolean=false;
  constructor(private dialog:MatDialog){

  }

  openDataSourceForm(){
    // this.displayForm=true;
    let dialogRef = this.dialog.open(DataSourceFormComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
