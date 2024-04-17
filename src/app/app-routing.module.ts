import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { InfoComponent } from './pages/info/info.component';
import { ElectronicComponent } from './components/electronic-components/electronic.component';
import { ResistorComponent } from './components/resistor/resistor.component';
import { CapacitorComponent } from './components/capacitor/capacitor.component';
import { InductorComponent } from './components/inductor/inductor.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'registration', component: RegistrationComponent },
  { path: 'info', component: InfoComponent },
  { path: 'electronic-components', component: ElectronicComponent },
  { path: 'resistor', component: ResistorComponent },
  { path: 'capacitor', component: CapacitorComponent },
  { path: 'inductor', component: InductorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
