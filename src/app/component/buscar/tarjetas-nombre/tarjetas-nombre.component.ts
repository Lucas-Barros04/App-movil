import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas-nombre',
  templateUrl: './tarjetas-nombre.component.html',
  styleUrls: ['./tarjetas-nombre.component.scss'],
})
export class TarjetasNombreComponent  implements OnInit {
buscar = [
    {
      imagen: { url: 'https://ionicframework.com/docs/img/demos/card-media.png' },
      titulo: 'Card Title 1',
      subtitulo: 'Card Subtitle 1',
      descripcion: 'Descripción de la tarjeta 1.'
    },
    {
      imagen: { url: 'https://ionicframework.com/docs/img/demos/card-media.png' },
      titulo: 'Card Title 2',
      subtitulo: 'Card Subtitle 2',
      descripcion: 'Descripción de la tarjeta 2.'
    },
    {
      imagen: { url: 'https://ionicframework.com/docs/img/demos/card-media.png' },
      titulo: 'Card Title 3',
      subtitulo: 'Card Subtitle 3',
      descripcion: 'Descripción de la tarjeta 3.'
    },
    {
      imagen: { url: 'https://ionicframework.com/docs/img/demos/card-media.png' },
      titulo: 'Card Title 4',
      subtitulo: 'Card Subtitle 4',
      descripcion: 'Descripción de la tarjeta 4.'
    },
    {
      imagen: { url: 'https://ionicframework.com/docs/img/demos/card-media.png' },
      titulo: 'Card Title 5',
      subtitulo: 'Card Subtitle 5',
      descripcion: 'Descripción de la tarjeta 5.'
    },
    {
      imagen: { url: 'https://ionicframework.com/docs/img/demos/card-media.png' },
      titulo: 'Card Title 6',
      subtitulo: 'Card Subtitle 6',
      descripcion: 'Descripción de la tarjeta 6.'
    },
    {
      imagen: { url: 'https://ionicframework.com/docs/img/demos/card-media.png' },
      titulo: 'Card Title 7',
      subtitulo: 'Card Subtitle 7',
      descripcion: 'Descripción de la tarjeta 7.'
    },
  ];
  searchText: string = '';

  get filteredCards() {
    return this.buscar.filter(tarjeta =>
      tarjeta.titulo.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  constructor() { }

  ngOnInit() {}

}
