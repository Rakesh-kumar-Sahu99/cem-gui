import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-data-source-form',
  templateUrl: './data-source-form.component.html',
  styleUrl: './data-source-form.component.css'
})
export class DataSourceFormComponent implements OnInit {
  public userForm: any;
  public dbBase = ['MySql','Oracle'];
  constructor(private formBuilder: FormBuilder,private dialog:MatDialogRef<DataSourceFormComponent>) {
    this.userForm = this.formBuilder.group({
      dbbase: this.formBuilder.control('', [Validators.required]),
      hostname: this.formBuilder.control('', [Validators.required]),
      name: ['', [Validators.required]],
      port: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })


  }
  ngOnInit(): void {
    
  }
  getFormControl(controlName: any) {
    return this.userForm['controls'][controlName];
  }

  closeForm(){
    this.dialog.close(
      {
        
      }
    );

  }


}
