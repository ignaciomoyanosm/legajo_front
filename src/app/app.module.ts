import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamiliaComponent } from './familia/familia.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormFamiliaComponent } from './familia/form-familia.component';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomicilioComponent } from './domicilio/domicilio.component';
import { FormDomicilioComponent } from './domicilio/form-domicilio.component';

const routes:Routes=[
  { path:'', redirectTo:'/inicio', pathMatch:'full', data: { reloadOnRefresh: true } },
  { path:'inicio', component:InicioComponent},
  { path:'domicilio', component:DomicilioComponent},
  { path:'domicilio/form', component:FormDomicilioComponent},
  { path:'familiar', component:FamiliaComponent},
  { path:'familiar/form', component:FormFamiliaComponent},
  { path:'familiar/form/:id', component:FormFamiliaComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    FamiliaComponent,
    DomicilioComponent,
    InicioComponent,
    FormFamiliaComponent,
    DomicilioComponent,
    FormDomicilioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
