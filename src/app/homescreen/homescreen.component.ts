import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit{

  ngOnInit(): void {}
  constructor( private router: Router){}

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
      parent: 'Registraion and Billing',
      expanded: false,
      children: [
        'Register Patient and Billing',
      ]
    },
    {
      parent: 'Vitals',
      expanded: false,
      children: [
        'Patient Information',
        'Patient Register',
        'Doctors Desk'
      ]
    },
    {
      parent: 'Test Master',
      expanded: false,
      children: [
        'Lab Master'
      ]
    },
    {
      parent: 'Inventory',
      expanded: false,
      children: [
        'Create Inventory',
        'Update Inventory'
      ]
    },
    {
      parent: 'Reports',
      expanded: false,
      children: [
        'Result Entry',
        'Result Validation',
        'Final Report'
      ]
    },
    {
      parent: 'Dashboard',
      expanded: false,
      children: [
        'Admin Dashboard'
      ]
    },
    // Add more parent columns and their children as needed
  ];

  toggleExpand(item: any) {
    item.expanded = !item.expanded;
  }

  expandChildItem(childItem: string) {
    // Handle what happens when a child item is clicked
    console.log('Child item clicked:', childItem);
  }
  
  expandAll() {
    this.menuItems.forEach(item => (item.expanded = true));
  }

  collapseAll() {
    this.menuItems.forEach(item => (item.expanded = false));
  }

  // toggleAll() {
  //   this.menuItems.forEach(item => (item.expanded = !item.expanded));
  // }

}