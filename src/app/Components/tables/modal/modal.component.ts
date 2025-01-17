import { Component, Input, inject, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { toast } from 'ngx-sonner';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() value: boolean = false;
  @Output() close = new EventEmitter<void>();

  _formBuilder = inject(FormBuilder);

  categoriasGasto = [
    'Comida',
    'Transporte',
    'Entretenimiento',
    'Salud',
    'Otros',
  ];
  categoriasIngreso = [
    'Salario', 
    'Ventas', 
    'Inversiones', 
    'Regalos', 
    'Otros'
  ];


  form: FormGroup = this._formBuilder.group(
    {
      tipoActividad: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      monto: ['', [Validators.required]],
    }
  );

   async onSubmit() {
      if(this.form.invalid) return;
  
      try {
  
        const { tipoActividad, categoria, monto } = this.form.value;
  
        toast.success('Actividad creada con exito')
        this.close.emit();
      } catch (error) {
        console.log(error)
        toast.error('Ocurrio un error')
      }
  
    }

    onCancel() {
      this.close.emit(); 
    }
}
