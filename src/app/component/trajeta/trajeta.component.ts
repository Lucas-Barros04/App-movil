import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-trajeta',
  templateUrl: './trajeta.component.html',
  styleUrls: ['./trajeta.component.scss'],
})
export class TrajetaComponent  implements OnInit {
  @Input() imagen: { url: string } = { url: 'https://github.com/Lucas-Barros04.png' }; // Inicializado
  @Input() titulo: string = 'hola'; // Inicializado
  @Input() subtitulo: string = 'modelo'; // Inicializado
  @Input() descripcion: string = 'fallo';

  constructor() { }

  ngOnInit() {}
}
