import { Component } from '@angular/core';

@Component({
  selector: 'app-add-container',
  templateUrl: './add-container.component.html',
  styleUrls: ['./add-container.component.css']
})
export class AddContainerComponent {

  containerDetails: any ={container: '', seq: ''}

  constructor() {
    this.containerDetails = {}; 
  }

  clearConatinerDetails(){
    this.containerDetails.container = '';
    this.containerDetails.seq = '';
  }
}
