import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthComponent } from '../auth/auth.component';
import { SignupComponent } from '../signup/signup.component';
import { SellproductComponent } from '../sellproduct/sellproduct.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,AuthComponent,SignupComponent, SellproductComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my_angular_app';
}
