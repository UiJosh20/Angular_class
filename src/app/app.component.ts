import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,AuthComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my_angular_app';
}
