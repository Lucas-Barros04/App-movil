import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],

})
export class CarruselComponent  implements OnInit {
  usuarios = [
    { nombre: 'Midudev', imagen: 'https://github.com/midudev.png' },
    { nombre: 'Lucas Barros', imagen: 'https://github.com/Lucas-Barros04.png' },
    { nombre: 'React', imagen: 'https://github.com/react.png' },
    { nombre: 'Maria', imagen: 'https://github.com/react.png' },
    { nombre: 'Juan', imagen: 'https://github.com/react.png' },
    { nombre: 'Rosa', imagen: 'https://github.com/react.png' },
    { nombre: 'GooD', imagen: 'https://github.com/react.png' },
    { nombre: 'React', imagen: 'https://github.com/react.png' },
    { nombre: 'cientos', imagen: 'https://github.com/react.png' },
    { nombre: 'React', imagen: 'https://github.com/react.png' },
    { nombre: 'React', imagen: 'https://github.com/react.png' },
    { nombre: 'React', imagen: 'https://github.com/react.png' },
    { nombre: 'xd', imagen: 'https://github.com/react.png' },

    // Agrega más usuarios según sea necesario
  ];

  constructor() {

  }

  ngOnInit() {

  }

}
