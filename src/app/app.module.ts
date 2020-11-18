import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { IrtiendaComponent } from './Components/irtienda/irtienda.component';
import { MapaComponent } from './Components/mapa/mapa.component';
import { FormConsumidorComponent } from './Components/form-consumidor/form-consumidor.component';
import { FormTenderoComponent } from './Components/form-tendero/form-tendero.component';
import { IrtiendaComponent } from './Components/irtienda/irtienda.component';
import { MapaComponent } from './Components/mapa/mapa.component';

const routesApp: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'form-consumidor', component: FormConsumidorComponent },
  { path: 'form-tendero', component: FormTenderoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    SignUpComponent,
    IrtiendaComponent,
    MapaComponent
    FormConsumidorComponent,
    FormTenderoComponent,
    IrtiendaComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
