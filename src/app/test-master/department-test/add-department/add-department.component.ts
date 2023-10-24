import { Component } from '@angular/core';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {

  departmentDetails: any ={department: '', seq: ''}

  constructor() {
    this.departmentDetails = {}; 
  }

  clearDepartmentDetails(){
    this.departmentDetails.department = '';
    this.departmentDetails.seq = '';
  }

}
