import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { EditAddPatientComponent } from '../edit-add-patient/edit-add-patient.component';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';
import { SampleCollectionComponent } from '../sample-collection/sample-collection.component';
import { WorklistComponent } from '../worklist/worklist.component';

interface YourRowData {
  labId: string;
  nameAgeGen: string;
  pid: string;
  dateTime: string;
  branch: string;
  refBy: string;
  investigation: string;
}

const YOUR_DATA: YourRowData[] = [
  { labId: '1', nameAgeGen: 'John Doe (35/M)', pid: '12345', dateTime: '2023-10-15', branch: 'Branch A', refBy: 'Dr. Smith', investigation: 'Blood Test' },
  { labId: '2', nameAgeGen: 'Jane Smith (28/F)', pid: '54321', dateTime: '2023-10-16', branch: 'Branch B', refBy: 'Dr. Johnson', investigation: 'X-ray' },
]

@Component({
  selector: 'app-labpatient',
  templateUrl: './labpatient.component.html',
  styleUrls: ['./labpatient.component.css']
})
export class LabpatientComponent {

  displayedColumns: string[] = ['select', 'labId', 'nameAgeGen', 'pid', 'dateTime', 'branch', 'refBy', 'investigation'];
  dataSource = new MatTableDataSource<YourRowData>(YOUR_DATA);
  selection = new SelectionModel<YourRowData>(true, []);

  columnWidths = {
    select: '10px',
    labId: '60px',
    nameAgeGen: '120px',
    pid: '50px',
    dateTime: '90px',
    branch: '60px',
    refBy: '90px',
    investigation: '120px',
    actions: '150px'
  };

  constructor(public dialog: MatDialog) { }

  performSearch() {
    console.log('Performing search...');
  }

  clearSearch() {
    console.log('Clearing search...');
  }

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

  editRow(row: YourRowData) {
    console.log(`Editing row with labId ${row.labId}`);
  }

  billPrint(row: YourRowData) {
    console.log(`Printing bill for labId ${row.labId}`);
  }

  reportPrint(row: YourRowData) {
    console.log(`Printing report for labId ${row.labId}`);
  }

  sendSMS(row: YourRowData) {
    console.log(`Sending SMS for labId ${row.labId}`);
  }

  sendWhatsApp(row: YourRowData) {
    console.log(`Sending WhatsApp message for labId ${row.labId}`);
  }

  sendEmail(row: YourRowData) {
    console.log(`Sending email for labId ${row.labId}`);
  }

  editHistory(row: YourRowData) {
    console.log(`Editing history with labId ${row.labId}`);
  }

  resultEntry(row: YourRowData) {
    console.log(`Result entry with labId ${row.labId}`);
  }

  resultRecall(row: YourRowData) {
    console.log(`Result recall with labId ${row.labId}`);
  }

  openEditAddPatientModal(row: YourRowData): void {
    const dialogRef = this.dialog.open(EditAddPatientComponent, {
      width: '1300px',
      height: '550px',
      data: row
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  openAddPatientModal(row: YourRowData): void {
    const dialogRef = this.dialog.open(AddPatientComponent, {
      width: '1300px',
      height: '650px',
      data: row
    });

    dialogRef.afterClosed().subscribe((newPatientData) => {
      if (newPatientData) {
        YOUR_DATA.push(newPatientData);
        this.dataSource.data = YOUR_DATA;
      }
    });
  }

  openDetailModal(row: YourRowData): void {
    const dialogRef = this.dialog.open(DetailModalComponent, {
      width: '1300px',
      height: '550px',
      data: row
    });

    dialogRef.afterClosed().subscribe((newPatientData) => {
      if (newPatientData) {
        YOUR_DATA.push(newPatientData);
        this.dataSource.data = YOUR_DATA;
      }
    });
  }

  openSampleModal(row: YourRowData): void {
    const dialogRef = this.dialog.open(SampleCollectionComponent, {
      width: '2000px',
      height: '700px',
      data: row
    });

    dialogRef.afterClosed().subscribe((newPatientData) => {
      if (newPatientData) {
        YOUR_DATA.push(newPatientData);
        this.dataSource.data = YOUR_DATA;
      }
    });
  }

  openWorkListModal(row: YourRowData): void {
    const dialogRef = this.dialog.open(WorklistComponent, {
      width: '2000px',
      height: '700px',
      data: row
    });

    dialogRef.afterClosed().subscribe((newPatientData) => {
      if (newPatientData) {
        YOUR_DATA.push(newPatientData);
        this.dataSource.data = YOUR_DATA;
      }
    });
  }
}