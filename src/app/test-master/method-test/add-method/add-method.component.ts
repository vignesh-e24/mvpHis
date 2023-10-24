import { Component } from '@angular/core';

@Component({
  selector: 'app-add-method',
  templateUrl: './add-method.component.html',
  styleUrls: ['./add-method.component.css']
})
export class AddMethodComponent {

  methodDetails: any ={method: '', seq: ''}

  constructor() {
    this.methodDetails = {}; 
  }

  clearMethodDetails(){
    this.methodDetails.method = '';
    this.methodDetails.seq = '';
  }
}
