import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDepartmentComponent } from './add-department/add-department.component';

interface Test{
  text: string;
}

@Component({
  selector: 'app-department-test',
  templateUrl: './department-test.component.html',
  styleUrls: ['./department-test.component.css']
})
export class DepartmentTestComponent {

  data: Test[] = [
    {text: 'abc'},
    {text: 'abc'},
    {text: 'abc'},
    {text: 'abc'},
  ];

  col: string[] =['sqNo','TestName','Remove'];

  constructor(private matDialog:MatDialog){}

  openAdd(){
    this.matDialog.open(AddDepartmentComponent,{
      width:'350px',
    })
  }
}
