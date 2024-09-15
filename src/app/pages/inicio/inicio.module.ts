import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { CarruselComponent } from 'src/app/component/inicio/carrusel/carrusel.component';
import { TrajetaComponent } from 'src/app/component/trajeta/trajeta.component'; // Asegúrate de importar el componente


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
  ],
  declarations: [InicioPage, CarruselComponent, TrajetaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioPageModule {}
