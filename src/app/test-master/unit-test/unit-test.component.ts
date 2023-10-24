import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';

interface Test{
  text: string;
}

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css']
})
export class UnitTestComponent {

  data: Test[] = [
    {text: 'abc'},
    {text: 'abc'},
    {text: 'abc'},
    {text: 'abc'},
  ];

  col: string[] =['sqNo','TestName','Remove'];

  constructor(private matDialog:MatDialog){}

  openAdd(){
    this.matDialog.open(AddComponent,{
      width:'300px',
    })
  }

}
