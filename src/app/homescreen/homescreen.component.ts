import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css'],
})
export class HomescreenComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router: Router) {}

  userAuthenticated = true;
  username = 'Jayanth';

  isSidenavOpen = true;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  logout() {
    console.log('User logged out');
  }

  menuItems = [
    {
      parent: 'Registration and Billing',
      expanded: false,
      children: ['Register Patient and Billing'],
    },

    {
      parent: 'Vitals',
      expanded: false,
      children: ['Patient Information', 'Patient Register', 'Doctors Desk'],
    },

    {
      parent: 'Test Master',
      expanded: false,
      children: ['Lab Master'],
    },

    {
      parent: 'Inventory Management',
      expanded: false,
      children: [
        'Products',
        'Manufacturer',
        'Supplier',
        'Quantity',
        'Shelf',
        'Item Location',
      ],
    },

    {
      parent: 'Reports',
      expanded: false,
      children: ['Result Entry', 'Result Validation', 'Final Report'],
    },

    {
      parent: 'Dashboard',
      expanded: false,
      children: ['Admin Dashboard'],
    },
   
  ];

  toggleExpand(item: any) {
    item.expanded = !item.expanded;
  }

  expandChildItem(childItem: string, parentItem: string) {
    let route = '';

    switch (parentItem) {
      
      // Registration and Billing
      case 'Registration and Billing':
        switch (childItem) {
          case 'Register Patient and Billing':
            route = 'homescreen/registration-billing/register-patient';
            break;
        }
        break;

      // Vitals
      case 'Vitals':
        switch (childItem) {
          case 'Patient Information':
            route = 'homescreen/vitals/patient-information';
            break;
          case 'Patient Register':
            route = 'homescreen/vitals/patient-register';
            break;
          case 'Doctors Desk':
            route = 'homescreen/vitals/doctors-desk';
            break;
        }
        break;

      //Test Master
      case 'Test Master':
        switch (childItem) {
          case 'Lab Master':
            route = 'homescreen/test-master/lab-master';
            break;
        }
        break;

      //Inventory Management
      case 'Inventory Management':
        switch (childItem) {
          case 'Products':
            route = 'homescreen/inventory/products';
            break;
          case 'Manufacturer':
            route = 'homescreen/inventory/manufacturer';
            break;
          case 'Supplier':
            route = 'homescreen/inventory/supplier';
            break;
          case 'Quantity':
            route = 'homescreen/inventory/quantity';
            break;
          case 'Shelf':
            route = 'homescreen/inventory/shelf';
            break;
          case 'Item Location':
            route = 'homescreen/inventory/itemLocation';
            break;
        }
        break;

      default:
        // Handle default case if necessary
        break;
    }

    console.log('Navigating to route:', route);
    this.router.navigate([route]);
  }

  expandAll() {
    this.menuItems.forEach((item) => (item.expanded = true));
  }

  collapseAll() {
    this.menuItems.forEach((item) => (item.expanded = false));
  }
}
