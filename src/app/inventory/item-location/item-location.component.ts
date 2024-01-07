import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DetailsPopupComponent } from '../details-popup/details-popup.component';

@Component({
  selector: 'app-item-location',
  templateUrl: './item-location.component.html',
  styleUrls: ['./item-location.component.css'],
})
export class ItemLocationComponent implements AfterViewInit {
  selectedForm: string = '';

  constructor(private dialog: MatDialog) {}

  openDetailsDialog(selectedForm: string): void {
    const dialogRef = this.dialog.open(DetailsPopupComponent, {
      width: '600px',
      height: '600px',
      data: { selectedForm },
    });

    dialogRef.componentInstance.saveData.subscribe((result: any) => {
      this.pushDataIntoPaginator([result]); // Update the table data source and paginator with the saved data
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle the dialog close event (if needed)
    });
  }

  //Paginatore related code
  displayedColumns: string[] = ['Seq No', 'ItemLocation', 'Delete']; // Replace with your column names
  dataSource = new MatTableDataSource<any>([]); // Initialize with empty data

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Add '!' to inform TypeScript that paginator will be initialized

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Method to push new data into the paginator
  pushDataIntoPaginator(newData: any[]) {
    const data = this.dataSource.data.slice();
    newData.forEach((item) => {
      const formattedData = {
        'Seq No': data.length + 1,
        ItemLocation: item.itemLocation,
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
