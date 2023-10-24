import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContainerComponent } from './add-container/add-container.component';

interface Test{
  text: string;
}

@Component({
  selector: 'app-container-test',
  templateUrl: './container-test.component.html',
  styleUrls: ['./container-test.component.css']
})
export class ContainerTestComponent {

  data: Test[] = [
    {text: 'abc'},
    {text: 'abc'},
    {text: 'abc'},
    {text: 'abc'},
  ];

  col: string[] =['sqNo','TestName','Remove'];

  constructor(private matDialog:MatDialog){}

  openAdd(){
    this.matDialog.open(AddContainerComponent,{
      width:'350px',
    })
  }
}
