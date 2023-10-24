import { Component } from '@angular/core';

@Component({
  selector: 'app-test-dailog',
  templateUrl: './test-dailog.component.html',
  styleUrls: ['./test-dailog.component.css']
})
export class TestDailogComponent {

  roles = ['Operator', 'Technician', 'Doctor', 'Admin'];
}
