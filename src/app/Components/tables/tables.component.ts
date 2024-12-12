import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TableReusableComponent } from "./table-reusable/table-reusable.component";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface AnimalElement {
  name: string;
  species: string;
  age: number;
}

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [TableReusableComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export default class TablesComponent {
  
  columnsToDisplayElements: string[] = ['position', 'name', 'weight', 'symbol'];
  elementData: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' }
  ];

}
