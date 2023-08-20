import { Component, OnInit,HostListener} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder } from '@angular/forms';

interface UserData {
  name: string;
  email: string;
  isEditing: boolean;
}
interface TestData {
  dose: string;
  dosage: string;
  lot: string;
  manufacturer: String;
}
interface TestData1 {
DateandTimeofinjury:string;
DateandTimeofArrivalatFirstAid:string;
DoesInjuryRequireHosipital:string;
ReportorVisibleSymptomsofinjury: string;
SpecifytheIncident:string;
Treatment: string;
}

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css'],
  animations: [
    trigger('tabAnimation', [
      state('void', style({ transform: 'translateX(100%)' })),
      state('*', style({ transform: 'translateX(0)' })),
      transition(':enter', animate('300ms ease-in')),
      transition(':leave', animate('300ms ease-out'))
    ])
  ]
})
export class PatientRegistrationComponent implements OnInit{
  uploadedImagePath: string = '';
  selectedOption!: string;
  showRadioCard = false;
  showFormCard = false;
  
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft' && this.selectedOption !== 'VACINATIONRECORD') {
      // Move selection to the left
      if (this.selectedOption === 'FIRSTAID') {
        this.selectedOption = 'VACINATIONRECORD';
      } else if (this.selectedOption === 'DIETARYREQUIREMENTS') {
        this.selectedOption = 'FIRSTAID';
      }
    } else if (event.key === 'ArrowRight' && this.selectedOption !== 'DIETARYREQUIREMENTS') {
      // Move selection to the right
      if (this.selectedOption === 'VACINATIONRECORD') {
        this.selectedOption = 'FIRSTAID';
      } else if (this.selectedOption === 'FIRSTAID') {
        this.selectedOption = 'DIETARYREQUIREMENTS';
      }
    }
  }
  

  ShowVACINATIONRECORD: boolean = false;
  ShowFIRSTAID: boolean = false;
  ShowDIETARYREQUIREMENTS: boolean = false;
  isFormVisible: boolean = false;

  VACINATIONRECORD: any = {};
  FIRSTAID: any = { };
  DIETARYREQUIREMENTS: any = {};

  dataSource: TestData[] = [
    { dose: '1st dose', dosage: '1', lot: '985',   manufacturer: 'Sinovac' },
    { dose: '2nd dose', dosage: '2', lot: '545', manufacturer: 'H & H' },
    { dose: '3rd dose', dosage: '3', lot: '487', manufacturer:'Sinovac'},

  ];
columnsToDisplay: string[] = ['slNo', 'dose', 'dosage', 'lot', 'manufacturer', 'edit'];
   
dataSource1: TestData1[] = [
  { DateandTimeofinjury: '2020-04-11 18:47:05.677', DateandTimeofArrivalatFirstAid: '2020-04-11 18:47:05.677', DoesInjuryRequireHosipital: 'Yes', ReportorVisibleSymptomsofinjury:'Reported',SpecifytheIncident:'Accident', Treatment:'Injection'},
  { DateandTimeofinjury: '2020-04-11 18:47:05.677', DateandTimeofArrivalatFirstAid: '2020-04-11 18:47:05.677', DoesInjuryRequireHosipital: 'Yes', ReportorVisibleSymptomsofinjury:'Reported',SpecifytheIncident:'Accident', Treatment:'Injection'},
  { DateandTimeofinjury: '2020-04-11 18:47:05.677', DateandTimeofArrivalatFirstAid: '2020-04-11 18:47:05.677', DoesInjuryRequireHosipital: 'Yes', ReportorVisibleSymptomsofinjury:'Reported',SpecifytheIncident:'Accident', Treatment:'Injection'},
]
columnsToDisplay1: string[] = ['DateandTimeofinjury', 'DateandTimeofArrivalatFirstAid', 'DoesInjuryRequireHosipital', 'ReportorVisibleSymptomsofinjury', 'SpecifytheIncident', 'Treatment'];
 

  height: number = 0;
  weight: number = 0;
  bmi: number = 0;
  calculateBMI() {
    if (this.height > 0 && this.weight > 0) {
      this.bmi = this.weight / ((this.height / 100) ** 2);
    } else {
      this.bmi = 0;
    }
  }


  labelsLeft = ['Temperature', 'Blood Pressure','Vision'];
  labelsRight = ['Glucose', 'Bloodtype', 'Lungs'];
  labelsCenter= ['Throat','Pulse','Oxygen'];

   getIconClass(index: number): string {
     const iconClasses = ['fa-thermometer', 'fa-heartbeat', 'fa-eye'];
     return iconClasses[index] || '';
   }
   getIconClass1(index: number): string {
    const iconClasses = ['fas fa-flask', 'fas fa-tint', 'fas fa-lungs'];
    return iconClasses[index] || '';
  }
  getIconClass2(index: number): string {
    const iconClasses = ['fas fa-head-side-cough', 'fas fa-stethoscope', 'fas fa-medkit'];
    return iconClasses[index] || '';
  }
   selectedTabIndex = -1;

  constructor(private formBuilder: FormBuilder) {
    this.selectedOption = '';
    this.VACINATIONRECORD = {}; 
    this.FIRSTAID = {};
    this.DIETARYREQUIREMENTS = {};
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  // openTab(index: number) {
  //   this.selectedTabIndex = index;
  // }

  clearRow(row: UserData) {
    row.isEditing = false;
    // Implement logic to reset row data if needed
  }

  saveDetails() {
    console.log('VACINATIONRECORD saved:', this.VACINATIONRECORD);
    console.log('FIRSTAID saved', this.FIRSTAID);
    console.log('Medical DIETARYREQUIREMENTS saved',this.DIETARYREQUIREMENTS);
  }

    clearDetails() {
    this.DIETARYREQUIREMENTS.diabetis = '';
    this.DIETARYREQUIREMENTS.heart = '';
    this.DIETARYREQUIREMENTS.chickenpox = '';
    this.DIETARYREQUIREMENTS.measles = '';
 
  }

  closeDetails() {
    this.isFormVisible = false;
    this.selectedOption = '';
    this.VACINATIONRECORD = {};
    this.FIRSTAID = {};
    this.DIETARYREQUIREMENTS = {};
  }

  showForm(option: string) {
    this.selectedOption = option;
    this.isFormVisible = true;
  }
  onEdit(test: TestData) {
    console.log('Edit:', test);
  }
  // toggleButton(button: string) {
  //   this.buttonStates[button] = !this.buttonStates[button];
  // }
}



  
  
