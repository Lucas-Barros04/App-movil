import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { CarruselComponent } from 'src/app/component/inicio/carrusel/carrusel.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
  ],
  declarations: [InicioPage, CarruselComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioPageModule {}
