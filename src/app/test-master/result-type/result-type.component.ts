import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-result-type',
  templateUrl: './result-type.component.html',
  styleUrls: ['./result-type.component.css']
})
export class ResultTypeComponent {
  selectedOption!: string;
  isFormVisible: boolean = false;

  constructor(private formBuilder: FormBuilder){
    this.selectedOption = 'text';
  }

}
