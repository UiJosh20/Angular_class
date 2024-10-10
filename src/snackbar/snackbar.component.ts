import { Component } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  standalone:true,
})
export class SnackbarComponent {
  isVisible = false;
  message = '';

  show(message: string) {
    this.message = message;
    this.isVisible = true;

    setTimeout(() => {
      this.isVisible = false;
    }, 3000); // Hide after 3 seconds
  }
}
