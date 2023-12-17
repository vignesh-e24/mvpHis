import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})
export class DetailModalComponent {
  detailInfo: any = {};
  userLogs!: any[];
  userLogColumns: string[] = ['userName', 'userType', 'loggedDate', 'loggedType'];

  constructor(
    public dialogRef: MatDialogRef<DetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  billPrint() {
  }

  reportPrint() {
  }

  sendEmail() {
  }

  sendWhatsApp() {
  }

  sendSMS() {
  }

  viewUser() {
  }
}
