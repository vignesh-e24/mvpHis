import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMethodComponent } from './add-method/add-method.component';

interface Test{
  text: string;
}

@Component({
  selector: 'app-method-test',
  templateUrl: './method-test.component.html',
  styleUrls: ['./method-test.component.css']
})
export class MethodTestComponent {

  data: Test[] = [
    {text: 'abc'},
    {text: 'abc'},
    {text: 'abc'},
    {text: 'abc'},
  ];

  col: string[] =['sqNo','TestName','Remove'];

  constructor(private matDialog:MatDialog){}

  openAdd(){
    this.matDialog.open(AddMethodComponent,{
      width:'350px',
    })
  }
}
