import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  /* Creándolo a mano por medio de FORMCONTROL.
    miFormulario: FormGroup = new FormGroup({
      nombre: new FormControl('RTX 4080ti'),
      precio: new FormControl(1500),
      existencias: new FormControl(5)
    }); */


  miFormulario: FormGroup = this.fb.group({
    nombre: [
      // Valor por defecto
      ,
      // Validadores Asíncronos (en el mmoento de tocar el form)
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // Valores por defecto del formulario.
    // Tiene un incoveniente: todos los campos del formulario se tienen que definir, o nos dará un error al compilar.
    // this.miFormulario.setValue({
    // Es MEJOR usar RESET: al no poner "existencias", no devuelve error.
    this.miFormulario.reset({
      nombre: 'RTX4 4080ti',
      precio: 1600
    });


  }



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


    // Una vez guardada la información, "reseteamos" el formulario, dejándolo iniciado.
    this.miFormulario.reset();
  }

}
