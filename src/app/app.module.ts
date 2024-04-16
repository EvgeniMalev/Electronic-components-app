import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { InfoComponent } from './pages/info/info.component';
import { ElectronicComponents } from './components/electronic-components/electronic-components.component';
import { ResistorComponent } from './components/resistor/resistor.component';
import { CapacitorComponent } from './components/capacitor/capacitor.component';
import { InductorComponent } from './components/inductor/inductor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    InfoComponent,
    ElectronicComponent,
    ResistorComponent,
    CapacitorComponent,
    InductorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
