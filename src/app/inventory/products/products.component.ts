import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DetailsPopupComponent } from '../details-popup/details-popup.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements AfterViewInit {
  //Add prodcut details pop-up
  selectedForm: string = '';

  constructor(private dialog: MatDialog) {}

  openDetailsDialog(selectedForm: string): void {
    const dialogRef = this.dialog.open(DetailsPopupComponent, {
      width: '600px',
      height: '600px',
      data: { selectedForm },
    });

    dialogRef.componentInstance.saveData.subscribe((formData: any) => {
      // Push the new data into the paginator
      this.pushDataIntoPaginator([formData]);
      dialogRef.close(); // Close the dialog once the data is saved
    });

    dialogRef.afterClosed().subscribe(() => {
      // This block executes after the dialog is closed
      // Additional handling if needed
    });
  }

  //Paginatore related code
  displayedColumns: string[] = [
    'Seq No',
    'Name',
    'Batch No',
    'Supplier',
    'Manufacturer',
    'Manf/Exp',
    'Inprice/Sellprice',
    'Quantity',
    'Hsn',
    'ItemLocation',
    'Delete',
  ]; // Replace with your column names
  dataSource = new MatTableDataSource<any>([]); // Initialize with empty data

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Add '!' to inform TypeScript that paginator will be initialized

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  pushDataIntoPaginator(newData: any[]) {
    const data = this.dataSource.data.slice(); // Create a new array

    newData.forEach((item) => {
      const formattedData = {
        'Seq No': data.length + 1,
        Name: item.productName,
        'Batch No': item.batchNo,
        Supplier: item.supplier,
        Manufacturer: item.manufacturer,
        'Manf/Exp': `${item.startDate}/${item.endDate}`,
        'Inprice/Sellprice': `${item.costPrice}/${item.sellPrice}`,
        Quantity: item.quantity,
        Hsn: item.hsn,
        ItemLocation: item.itemLocation,
        // Add other fields as needed
      };

      data.push(formattedData); // Push the new formatted data
    });

    this.dataSource.data = data; // Set the data in the dataSource
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
