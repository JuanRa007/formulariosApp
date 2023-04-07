import { Component } from '@angular/core';


interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'JuanRa',
    favoritos: [
      { id: 1, nombre: 'Tomb Raider' },
      { id: 2, nombre: 'Piguin Adventure' },
      { id: 3, nombre: 'Far Cry' }
    ]
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };

    // Se envía el objeto por valor, no por referencia.
    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  guardar() {

    console.log('Formulario guardado...');
  }

}
