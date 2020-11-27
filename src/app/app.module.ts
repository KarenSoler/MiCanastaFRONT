import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { IrtiendaComponent } from './Components/irtienda/irtienda.component';
import { FormConsumidorComponent } from './Components/form-consumidor/form-consumidor.component';
import { FormTenderoComponent } from './Components/form-tendero/form-tendero.component';
import { LocalidadesComponent } from './components/localidades/localidades.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { TenderoComponent } from './Components/tendero/tendero.component';
import { PedidoComponent } from './Components/cliente/cliente.component';

const routesApp: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'form-consumidor', component: FormConsumidorComponent },
  { path: 'form-tendero', component: FormTenderoComponent },
  { path: 'localidades', component: LocalidadesComponent },  
  { path: 'login', component: LoginComponent},
  { path: 'product', component: ProductComponent },
  { path: 'tendero', component: TenderoComponent},
  { path: 'cliente', component: PedidoComponent}
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
    LoginComponent,
    ProductComponent,
    TenderoComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }