import { Component } from '@angular/core';

interface Test{
  text: string;
}

@Component({
  selector: 'app-ref-dialog',
  templateUrl: './ref-dialog.component.html',
  styleUrls: ['./ref-dialog.component.css']
})


export class RefDialogComponent {

  data: Test[] = [
    {text: 'abc'},
    {text: 'zbc'},
  ];

  col: string[] =['sqNo','TestName','Remove','blank'];

}
