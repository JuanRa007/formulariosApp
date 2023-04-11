import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [
      // Valor por defecto
      '',
      // Validadores Asíncronos (en el mmoento de tocar el form)
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ]
  })

  constructor(private fb: FormBuilder) { }

  campoNoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }


  guardar() {

    if (this.miFormulario.invalid) {

      // Para que además se muestren los errores al guardar.
      // Simula que se entra y sale de todos los campos.
      this.miFormulario.markAllAsTouched();

      return;
    }

    console.log(this.miFormulario.value);

  }

}
