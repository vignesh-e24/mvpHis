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
      parent: 'Registraion and Billing',
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
    // Add more parent columns and their children as needed
  ];

  toggleExpand(item: any) {
    item.expanded = !item.expanded;
  }

  expandChildItem(childItem: string, parentItem: string) {
    let route = '';

    if (parentItem === 'Inventory Management' && childItem === 'Item Location') {
      route = 'homescreen/inventory/itemLocation'; // Path defined in your routing configuration
    } else {
      route = `homescreen/inventory/${childItem
        .toLowerCase()
        .replace(/ /g, '-')}`;
    }

    this.router.navigate([route]);
  }

  expandAll() {
    this.menuItems.forEach((item) => (item.expanded = true));
  }

  collapseAll() {
    this.menuItems.forEach((item) => (item.expanded = false));
  }

}
