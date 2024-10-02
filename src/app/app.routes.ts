import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthComponent } from '../auth/auth.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Homepage' },
  { path: 'login', component: AuthComponent, title: 'Login' },
];
