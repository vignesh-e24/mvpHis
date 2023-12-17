import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-add-patient',
  templateUrl: './edit-add-patient.component.html',
  styleUrls: ['./edit-add-patient.component.css']
})
export class EditAddPatientComponent implements OnInit {
  patientInfo: any = {};

  constructor(private dialogRef: MatDialogRef<EditAddPatientComponent>) { }

  ngOnInit(): void { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  savePatientInfo(): void {
    console.log(this.patientInfo);
    this.dialogRef.close();
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.patientInfo.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadImage(): void {
  }
}
