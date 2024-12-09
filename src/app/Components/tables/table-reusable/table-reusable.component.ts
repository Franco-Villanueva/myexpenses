import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table-reusable',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-reusable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './table-reusable.component.css'
})
export class TableReusableComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any[] = [];
}
