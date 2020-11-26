import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { IrtiendaComponent } from './Components/irtienda/irtienda.component';
import { FormConsumidorComponent } from './Components/form-consumidor/form-consumidor.component';
import { FormTenderoComponent } from './Components/form-tendero/form-tendero.component';
import { LocalidadesComponent } from './components/localidades/localidades.component';
import { ListarlocalidadesComponent } from './components/listarlocalidades/listarlocalidades.component';

const routesApp: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'form-consumidor', component: FormConsumidorComponent },
  { path: 'form-tendero', component: FormTenderoComponent },
  { path: 'localidades', component: LocalidadesComponent },
  { path: 'liatarlocalidades', component: ListarlocalidadesComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,    
    IrtiendaComponent,
    FormConsumidorComponent,
    FormTenderoComponent,
    LocalidadesComponent,    
    ListarlocalidadesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }