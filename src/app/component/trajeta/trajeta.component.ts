import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-trajeta',
  templateUrl: './trajeta.component.html',
  styleUrls: ['./trajeta.component.scss'],
})
export class TrajetaComponent  implements OnInit {
  tarjetas = [
    {
      imagen: { url: 'https://ionicframework.com/docs/img/demos/card-media.png' },
      titulo: 'herederos forzosos',
      subtitulo: 'Card Subtitle 1',
      descripcion: 'Descripción de la tarjeta 1.'
    },
    {
      imagen: { url: 'https://ionicframework.com/docs/img/demos/card-media.png' },
      titulo: 'UBISOFT es ILEGAL ❌ QUIEBRA, SE VENDEN y STAR WARS OUTLAWS se PONE PEOR',
      subtitulo: 'Card Subtitle 2',
      descripcion: 'Descripción de la tarjeta 2.'
    },
    {
      imagen: { url: 'https://ionicframework.com/docs/img/demos/card-media.png' },
      titulo: 'El INCREÍBLE Potencial De: Amphibia 😱| Resumen / Reseña',
      subtitulo: 'Card Subtitle 3',
      descripcion: 'Descripción de la tarjeta 3.'
    },
    {
      imagen: { url: 'https://ionicframework.com/docs/img/demos/card-media.png' },
      titulo: 'El traje mas poderoso de Iron Man - Aun más fuerte que el adamantium',
      subtitulo: 'Card Subtitle 3',
      descripcion: 'Descripción de la tarjeta 3.'
    },
  ];
  currentIndex: number = 0;
  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.tarjetas.length;
  }
  constructor() { }

  ngOnInit() {}
}
