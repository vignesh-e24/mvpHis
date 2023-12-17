import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

interface RowData {
  sNo: number;
  visit: string;
  nameAgeGen: string;
  container: string;
  test: string;
  refer: string;
  regDate: string;
  collectedDate: string;
  remark: string;
}

const DATA: RowData[] = [
  { sNo: 1, visit: 'Visit 1', nameAgeGen: 'John Doe (45/M)', container: 'Container 1', test: 'Test 1', refer: 'Dr. Smith', regDate: '10-08-2024', collectedDate: '11-08-2024', remark: '' },
  { sNo: 2, visit: 'Visit 2', nameAgeGen: 'Jane Doe (32/F)', container: 'Container 2', test: 'Test 2', refer: 'Dr. Johnson', regDate: '10-08-2024', collectedDate: '11-08-2024', remark: '' },
];

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.css']
})
export class WorklistComponent {

  displayedColumns: string[] = ['select', 'sNo', 'visit', 'nameAgeGen', 'container', 'test', 'refer', 'regDate', 'collectedDate', 'remark'];
  dataSource = new MatTableDataSource<RowData>(DATA);
  selection = new SelectionModel<RowData>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach((row: RowData) => this.selection.select(row));
  }

  toggleSelection(row: any) {
    this.selection.toggle(row);
  }

  isRowEditable(row: RowData): boolean {
    return true;
  }

  deleteRow(row: RowData): void {
    const index = this.dataSource.data.indexOf(row);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
    }
  }
}
