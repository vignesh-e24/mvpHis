import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';

interface YourRowData {
  seqNo: string;
  name: string;
  morn: string;
  noon: string;
  eve: string;
  day: string;
  quantity: string;
  stock: string;
  extr: string;
}

const YOUR_DATA: YourRowData[] = [
  { seqNo: '1', name: 'John Doe', morn: 'Morning Data', noon: 'Noon Data', eve: 'Evening Data', day: 'Day Data', quantity: '10', stock: 'In Stock', extr: 'Extra Data' },
  { seqNo: '2', name: 'Jane Smith', morn: 'Morning Data', noon: 'Noon Data', eve: 'Evening Data', day: 'Day Data', quantity: '20', stock: 'In Stock', extr: 'Extra Data' },
];

@Component({
  selector: 'app-doctor-desk',
  templateUrl: './doctor-desk.component.html',
  styleUrls: ['./doctor-desk.component.css']
})
export class DoctorDeskComponent {
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;

  displayedColumns: string[] = ['select', 'seqNo', 'morn', 'noon', 'eve', 'day', 'quantity', 'stock', 'extr'];
  dataSource = new MatTableDataSource<YourRowData>(YOUR_DATA);
  selection = new SelectionModel<YourRowData>(true, []);

  columnWidths = {
    select: '10px',
    seqNo: '60px',
    morn: '90px',
    noon: '90px',
    eve: '90px',
    day: '90px',
    quantity: '80px',
    stock: '80px',
    extr: '80px'
  };

  constructor() { }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  toggleSelection(row: any) {
    this.selection.toggle(row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}