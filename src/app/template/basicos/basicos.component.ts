import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  // Valores iniciales del formulario (como hace el RESETFORM)
  initForm = {
    producto: 'RTX 4090ti',
    precio: 10,
    existencias: 10
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched
  }


  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.touched && this.miFormulario?.controls['precio']?.value < 0;
  }

  /*   guardar(miFormulario: NgForm) { */
  guardar() {
    console.log('Creado correctamente.');

    this.miFormulario.resetForm({
      // Valores por defecto
      producto: '(sin valor)',
      precio: 0,
      existencias: 0
    });
  }

}
