import { Component } from '@angular/core';

interface RowData {
  seqNo: number;
  investigation: string;
  collectedDate: string;
  tatDate: string;
  quantity: number;
  discount: number;
  price: number;
}


const DATA: RowData[] = [
  { seqNo: 1, investigation: 'Blood Test', collectedDate: '10-08-2024', tatDate: '11-08-2024', quantity: 3, discount: 5, price: 100 },
  { seqNo: 2, investigation: 'X-ray', collectedDate: '10-08-2024', tatDate: '11-08-2024', quantity: 1, discount: 0, price: 150 }
];

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  displayedColumns: string[] = ['seqNo', 'investigation', 'collectedDate', 'tatDate', 'quantity', 'discount', 'price', 'delete'];
  dataSource = DATA;

  deleteRow(row: RowData): void {
    const index = this.dataSource.indexOf(row);
    if (index >= 0) {
      this.dataSource.splice(index, 1);
    }
  }
}
