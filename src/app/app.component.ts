import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedCities: string[] = [];

  selectedCategories: any[] = [];

  categories: any[] = [
    { name: 'Accounting abc', value: 'Accounting' },
    { name: 'Marketing', value: 'abcbc' },
    'Production',
    'Research',
  ];

  checked: boolean = false;

  ngOnInit() {
    this.selectedCategories = [
      { name: 'Accounting abc', value: 'Accounting' },
      { name: 'Marketing', value: 'abcbc' },
    ];
  }
}
