import { Component, OnInit, ViewChild } from '@angular/core';
import { TestDailogComponent } from './test-dailog/test-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { UnitTestComponent } from './unit-test/unit-test.component';
import { SampleTestComponent } from './sample-test/sample-test.component';
import { ContainerTestComponent } from './container-test/container-test.component';
import { DepartmentTestComponent } from './department-test/department-test.component';
import { MethodTestComponent } from './method-test/method-test.component';
import { FormBuilder } from '@angular/forms';
import { RefDialogComponent } from './ref-dialog/ref-dialog.component';
import { ResultTypeComponent } from './result-type/result-type.component';

interface TestData {
  department: string;
  sample: string;
  unit: string;
  method:string;
  refRange:string;
  result:string;
  price: number;
}

interface Test{
  text: string;
}

@Component({
  selector: 'app-test-master',
  templateUrl: './test-master.component.html',
  styleUrls: ['./test-master.component.css']
})
export class TestMasterComponent implements OnInit{
  selectedOption!: string;
  isFormVisible: boolean = false;
  showRadioCard = false;

  ngOnInit(): void {
  }

  dataSource: TestData[] = [
    { department: 'TC001', sample: 'Test 1', unit: '2 days',method: 'abc', refRange: '10', result: 'pass', price: 100 },
    { department: 'KC002', sample: 'Test 1', unit: '2 days',method: 'abc', refRange: '10', result: 'pass', price: 100 },
    { department: 'AC003', sample: 'Test 1', unit: '2 days',method: 'abc', refRange: '10', result: 'pass', price: 100 },
    { department: 'UC001', sample: 'Test 1', unit: '2 days',method: 'abc', refRange: '10', result: 'pass', price: 100 },
    { department: 'IC001', sample: 'Test 1', unit: '2 days',method: 'abc', refRange: '10', result: 'pass', price: 100 },
  ];


  columnsToDisplay: string[] = ['check','sqNo', 'textArea', 'department', 'sample','unit','method','Range','result', 'price', 'delete'];

  data: Test[] = [
    {text: 'abc'},
    {text: 'zbc'},
    {text: 'hbc'},
    {text: 'nbc'},
  ];

  data1: Test[] = [
    {text: '{Su} {M} {T} {W} {T} {F} {St}'},
  ];

  col: string[] =['sqNo','TestName','Remove'];

  col1: string[] =['sqNo','TestName'];

  roles = ['Operator', 'Technician', 'Doctor', 'Admin'];

  resultType = ['text','picklist','templete','numeric'];

  testMaster: any = { testName: '', department: '', sample: '', unit: '', container: '', method: '', result: '', ref: '',ref1: '',price: '', comments: '', decimal: ''};

  packageMaster: any ={grpName: '', department: '', sample: '', container: '', price: ''}

  constructor(private matDialog:MatDialog,private formBuilder: FormBuilder){
    this.selectedOption = 'testMaster';
    this.testMaster = {}; 
    this.packageMaster = {};
  }

  toggleRadioCard() {
    this.showRadioCard = !this.showRadioCard;
  }

  showForm(option: string) {
    this.selectedOption = option;
    this.isFormVisible = true;
  }

  openDialog(){
    this.matDialog.open(TestDailogComponent,{
      width:'500px',
    })
  }

  openResultType(){
    this.matDialog.open(ResultTypeComponent,{
      width:'500px',height:'400px',
    })
  }

  openRefDialog(){
    this.matDialog.open(RefDialogComponent,{
      width:'800px', height:'400px',
    })
  }

  openUnitDialog(){
    this.matDialog.open(UnitTestComponent,{
      width:'1000px', height:'500px',
    })
  }

  openSampleDialog(){
    this.matDialog.open(SampleTestComponent,{
      width:'1000px', height:'500px',
    })
  }

  openConatinerDialog(){
    this.matDialog.open(ContainerTestComponent,{
      width:'1000px', height:'500px',
    })
  }

  openDepartmentDialog(){
    this.matDialog.open(DepartmentTestComponent,{
      width:'1000px', height:'500px',
    })
  }

  openMethodDialog(){
    this.matDialog.open(MethodTestComponent,{
      width:'1000px', height:'500px',
    })
  }

  clearTestDetails() {
    this.testMaster.testName = '';
    this.testMaster.department = '';
    this.testMaster.sample = '';
    this.testMaster.unit = '';
    this.testMaster.container = '';
    this.testMaster.method = '';
    this.testMaster.result = '';
    this.testMaster.price = '';
    this.testMaster.ref = '';
    this.testMaster.ref1= '';
    this.testMaster.comments='';
    this.testMaster.decimal='';
  }

  clearPackageDetails(){
    this.packageMaster.grpName = '';
    this.packageMaster.department = '';
    this.packageMaster.sample = '';
    this.packageMaster.container = '';
    this.packageMaster.price = '';
  }
}
