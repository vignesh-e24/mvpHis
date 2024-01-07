import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details-popup',
  templateUrl: 'details-popup.component.html',
})
export class DetailsPopupComponent {
  @Output() saveData = new EventEmitter<any>();
  selectedForm: string;
  manufacturerForm: FormGroup;
  productForm: FormGroup;
  supplierForm: FormGroup;
  shelfForm: FormGroup;
  itemLocationForm: FormGroup;
  quantityForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DetailsPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.selectedForm = data.selectedForm;
    this.productForm = this.fb.group({
      batchNo: ['', Validators.required],
      productName: ['', Validators.required],
      supplier: [''],
      manufacturer: [''],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      costPrice: [''],
      sellPrice: [''],
      quantity: [''],
      hsn: [''],
      shelf: [''],
      itemLocation: [''],
      // ... Add other form fields and validations as needed
    });

    this.manufacturerForm = this.fb.group({
      manufacturer: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      // ... Other manufacturer fields
    });

    this.supplierForm = this.fb.group({
      supplier: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });

    this.shelfForm = this.fb.group({
      shelf: ['', Validators.required],
      // ... Other manufacturer fields
    });

    this.quantityForm = this.fb.group({
      quantity: ['', Validators.required],
      // ... Other manufacturer fields
    });

    this.itemLocationForm = this.fb.group({
      itemLocation: ['', Validators.required],
      // ... Other manufacturer fields
    });
  }

  onSave(): void {
    let formData: any;
    if (this.selectedForm === 'product') {
      formData = this.productForm.value;
    } else if (this.selectedForm === 'manufacturer') {
      formData = this.manufacturerForm.value;
    } else if (this.selectedForm === 'supplier') {
      formData = this.supplierForm.value;
    } else if (this.selectedForm === 'shelf') {
      formData = this.shelfForm.value;
    } else if (this.selectedForm === 'itemLocation') {
      formData = this.itemLocationForm.value;
    } else if (this.selectedForm === 'quantity') {
      formData = this.quantityForm.value;
    }

    if (formData && this.isFormValid()) {
      this.saveData.emit(formData);
      this.dialogRef.close(formData);
    } else {
      // Handle validation errors or inform the user about an incomplete form
    }
  }

  isFormValid(): boolean {
    if (this.selectedForm === 'product') {
      return this.productForm.valid;
    } else if (this.selectedForm === 'manufacturer') {
      return this.manufacturerForm.valid;
    } else if (this.selectedForm === 'supplier') {
      return this.supplierForm.valid;
    } else if (this.selectedForm === 'shelf') {
      return this.shelfForm.valid;
    } else if (this.selectedForm === 'itemLocation') {
      return this.itemLocationForm.valid;
    } else if (this.selectedForm === 'quantity') {
      return this.quantityForm.valid;
    }

    return false;
  }

  onClear() {
    if (this.selectedForm === 'product') {
      this.productForm.reset();
    } else if (this.selectedForm === 'manufacturer') {
      this.manufacturerForm.reset();
    } else if (this.selectedForm === 'supplier') {
      this.supplierForm.reset();
    } else if (this.selectedForm === 'shelf') {
      this.shelfForm.reset();
    } else if (this.selectedForm === 'itemLocation') {
      this.itemLocationForm.reset();
    } else if (this.selectedForm === 'quantity') {
      this.quantityForm.reset();
    }
  }
}
