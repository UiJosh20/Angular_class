import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthComponent } from '../auth/auth.component';
import { SignupComponent } from '../signup/signup.component';
import { SellproductComponent } from '../sellproduct/sellproduct.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Homepage' },
  { path: 'login', component: AuthComponent, title: 'Login' },
  { path: 'signup', component: SignupComponent, title: 'Signup' },
  {path:"sell", component:SellproductComponent, title:"Product"},
];
