import { Component } from '@angular/core';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent {

  sampleDetails: any ={sample: '', seq: ''}

  constructor() {
    this.sampleDetails = {}; 
  }

  clearSampleDetails(){
    this.sampleDetails.sample = '';
    this.sampleDetails.seq = '';
  }
}
