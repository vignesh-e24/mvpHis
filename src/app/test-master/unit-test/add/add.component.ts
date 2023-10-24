import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  unitDetails: any ={unit: '', seq: ''}

  constructor() {
    this.unitDetails = {}; 
  }

  clearUnitDetails(){
    this.unitDetails.unit = '';
    this.unitDetails.seq = '';
  }
}
