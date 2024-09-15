import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas-nombre',
  templateUrl: './tarjetas-nombre.component.html',
  styleUrls: ['./tarjetas-nombre.component.scss'],
})
export class TarjetasNombreComponent  implements OnInit {
  @Input() buscar: { imagen: { url: string }, titulo: string, subtitulo: string, descripcion: string }[] = []; 
  @Input() searchText: string = ''; // Recibe el texto de búsqueda

  get filteredCards() {
    return this.buscar.filter(tarjeta =>
      tarjeta.titulo.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  constructor() { }

  ngOnInit() {}

}
