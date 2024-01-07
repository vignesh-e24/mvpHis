// manufacturer.component.ts
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DetailsPopupComponent } from '../details-popup/details-popup.component';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css'],
})
export class ManufacturerComponent implements AfterViewInit {
  selectedForm: string = '';
  displayedColumns: string[] = [
    'Seq No',
    'Manufacturer',
    'Address',
    'Phone Number',
    'Delete',
  ];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {}

  openDetailsDialog(selectedForm: string): void {
    const dialogRef = this.dialog.open(DetailsPopupComponent, {
      width: '600px',
      height: '600px',
      data: { selectedForm },
    });

    dialogRef.componentInstance.saveData.subscribe((formData: any) => {
      this.pushDataIntoPaginator([formData]);
      dialogRef.close();
    });

    dialogRef.afterClosed().subscribe(() => {
      // Additional handling after the dialog is closed
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  pushDataIntoPaginator(newData: any[]) {
    const data = this.dataSource.data.slice();
    newData.forEach((item) => {
      const formattedData = {
        'Seq No': data.length + 1,
        Manufacturer: item.manufacturer,
        Address: item.address,
        Phone: item.phoneNumber,
        // Add other fields as needed
      };
      data.push(formattedData);
    });
    this.dataSource.data = data;
  }

  // Method to handle item deletion
deleteItem(item: any): void {
  const index = this.dataSource.data.indexOf(item);
  if (index >= 0) {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = [...this.dataSource.data]; 

    if (this.dataSource.paginator) {
      this.dataSource.paginator.length = this.dataSource.data.length;
    }
  }
}
}
