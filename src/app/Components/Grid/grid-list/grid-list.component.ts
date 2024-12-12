import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GraphicComponent } from "../graphic/graphic.component";


interface Box {
  icon: string;
  text: string;
  valor: number;
  sig: string;
}

interface Month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-grid-list',
  standalone: true,
  imports: [MatGridListModule, MatFormFieldModule, MatSelectModule, MatInputModule, GraphicComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.css'
})
export default class GridListComponent {

  

  list: Box[] = [
    {text: 'Balance Total', icon:'x', valor: 1500 , sig:'$'},
    {text: 'Ingreso', icon:'x', valor: 1500, sig:'+$'},
    {text: 'Egreso', icon:'x', valor: 1500, sig:'-$'},
    {text: 'Egreso', icon:'x', valor: 1500, sig:'-$'},
  ];

  months: Month[] = [
    { value: 'enero', viewValue: 'Enero' },
    { value: 'febrero', viewValue: 'Febrero' },
    { value: 'marzo', viewValue: 'Marzo' },
    { value: 'abril', viewValue: 'Abril' },
    { value: 'mayo', viewValue: 'Mayo' },
    { value: 'junio', viewValue: 'Junio' },
    { value: 'julio', viewValue: 'Julio' },
    { value: 'agosto', viewValue: 'Agosto' },
    { value: 'septiembre', viewValue: 'Septiembre' },
    { value: 'octubre', viewValue: 'Octubre' },
    { value: 'noviembre', viewValue: 'Noviembre' },
    { value: 'diciembre', viewValue: 'Diciembre' },
  ];
  
}
