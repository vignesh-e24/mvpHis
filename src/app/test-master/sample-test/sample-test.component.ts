import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponentComponent } from './add-component/add-component.component';

interface Test{
  text: string;
}

@Component({
  selector: 'app-sample-test',
  templateUrl: './sample-test.component.html',
  styleUrls: ['./sample-test.component.css']
})
export class SampleTestComponent {
  data: Test[] = [
    {text: 'abc'},
    {text: 'abc'},
    {text: 'abc'},
    {text: 'abc'},
  ];

  col: string[] =['sqNo','TestName','Remove'];

  constructor(private matDialog:MatDialog){}

  openAdd(){
    this.matDialog.open(AddComponentComponent,{
      width:'350px',
    })
  }
}
