import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

interface TestData {
  testCode: string;
  testName: string;
  tat: string;
  price: number;
}

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit{

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  selectedOption!: string;
  showRadioCard = false;
  showFormCard = false; 
  selectedFile: File | undefined;
  selectedFileUrl: any;
  selectedFile1: File | undefined;
  selectedFile1Url: any;
  selectedFile2: File | undefined;
  selectedFile2Url: any;
  selectedFile3: File | undefined;
  selectedFile3Url: any;
  selectedFile4: File | undefined;
  selectedFile4Url: any;
  uploadProgress: number | undefined;
  searchTerm!: string;
  age!: number;
  showAddress: boolean = false;
  showIdentification: boolean = false;
  showHistory: boolean = false;
  isFormVisible: boolean = false;

  address: any = { street: '', city: '', pincode: '' ,area: '', country: '', state: ''};
  identification: any = { aadhar: '', passport: '', pancard: '', license: ''};
  history: any = { diabetis: '', heart: '', stock: '', chickenpox: '', measles: '', hbv: '', crtMed: '', others: ''};
  dataSource: TestData[] = [
    { testCode: 'TC001', testName: 'Test 1', tat: '2 days', price: 100 },
    { testCode: 'TC002', testName: 'Test 2', tat: '1 day', price: 150 },
    { testCode: 'TC003', testName: 'Test 3', tat: '3 days', price: 120 },
  ];

  columnsToDisplay: string[] = ['slNo', 'testCode', 'testName', 'tat', 'price', 'edit'];

  getProgressBarColor(amountType: string): string {
    switch (amountType) {
      case 'green':
        return 'green';
      case 'yellow':
        return 'yellow';
      case 'green':
        return 'green';
      case 'blue':
        return 'blue';
      case 'red':
        return 'red';
      case 'pink':
        return 'pink';
      default:
        return '';
    }
  }
  constructor(private formBuilder: FormBuilder) {
    this.selectedOption = 'address';
    this.address = {}; 
    this.identification = {};
    this.history = {};
  }

  ngOnInit(): void {
    }
   
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFileUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onFileSelected1(event: any) {
    this.selectedFile1 = event.target.files[0] as File;
    if (this.selectedFile1) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFile1Url = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile1);
    }
  }

  onFileSelected2(event: any) {
    this.selectedFile2 = event.target.files[0] as File;
    if (this.selectedFile2) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFile2Url = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile2);
    }
  }

  onFileSelected3(event: any) {
    this.selectedFile3 = event.target.files[0] as File;
    if (this.selectedFile3) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFile3Url = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile3);
    }
  }

  onFileSelected4(event: any) {
    this.selectedFile4 = event.target.files[0] as File;
    if (this.selectedFile4) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFile4Url = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile4);
    }
  }

  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
  }

  uploadImage1() {
    if (this.selectedFile1) {
      const formData = new FormData();
      formData.append('image', this.selectedFile1, this.selectedFile1.name);
    }
  }

  uploadImage2() {
    if (this.selectedFile2) {
      const formData = new FormData();
      formData.append('image', this.selectedFile2, this.selectedFile2.name);
    }
  }

  uploadImage3() {
    if (this.selectedFile3) {
      const formData = new FormData();
      formData.append('image', this.selectedFile3, this.selectedFile3.name);
    }
  }
  uploadImage4() { 
    if (this.selectedFile4) {
      const formData = new FormData();
      formData.append('image', this.selectedFile4, this.selectedFile4.name);
    }
  }

  onEdit(test: TestData) {
    console.log('Edit:', test);
  }

  clearSearch() {
    this.searchTerm = '';
  }

  saveDetails() {
    console.log('Address saved:', this.address);
    console.log('Identification saved', this.identification);
    console.log('Medical History saved',this.history);
  }

  clearDetails() {
    this.address.street = '';
    this.address.city = '';
    this.address.pincode = '';
    this.address.state = '';
    this.address.country = '';
    this.address.area = '';
    this.identification.aadhar = '';
    this.identification.passport = '';
    this.identification.license = '';
    this.identification.pancard = '';
    this.history.diabetis = '';
    this.history.heart = '';
    this.history.chickenpox = '';
    this.history.measles = '';
    this.history.hbv = '';
    this.history.crtMed = '';
    this.history.others = '';
  }

  closeDetails() {
    this.isFormVisible = false;
    this.selectedOption = '';
    this.address = {};
    this.identification = {};
    this.history = {};
  }

  toggleRadioCard() {
    this.showRadioCard = !this.showRadioCard;
  }

  showForm(option: string) {
    this.selectedOption = option;
    this.isFormVisible = true;
  }

}
