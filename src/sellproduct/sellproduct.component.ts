import { Component, ViewChild } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { SnackbarComponent } from '../snackbar/snackbar.component';



@Component({
  selector: 'app-sellproduct',
  standalone: true,
  imports: [NavComponent, SnackbarComponent, CommonModule,], // Add CommonModule here
  templateUrl: './sellproduct.component.html',
  styleUrls: ['./sellproduct.component.css'], // Corrected from styleUrl to styleUrls
})
export class SellproductComponent {
  @ViewChild(SnackbarComponent) snackbar!: SnackbarComponent;

  product = [
    {
      name: 'Product 1',
      price: '$19.99',
      image: 'https://picsum.photos/id/1/300/200',
    },
    {
      name: 'Product 2',
      price: '$29.99',
      image: 'https://picsum.photos/id/2/300/200',
    },
    {
      name: 'Product 3',
      price: '$39.99',
      image: 'https://picsum.photos/id/3/300/200',
    },
    {
      name: 'Product 4',
      price: '$49.99',
      image: 'https://picsum.photos/id/4/300/200',
    },
    {
      name: 'Product 5',
      price: '$59.99',
      image: 'https://picsum.photos/id/5/300/200',
    },
    {
      name: 'Product 6',
      price: '$69.99',
      image: 'https://picsum.photos/id/6/300/200',
    },
    {
      name: 'Product 7',
      price: '$79.99',
      image: 'https://picsum.photos/id/7/300/200',
    },
    {
      name: 'Product 8',
      price: '$89.99',
      image: 'https://picsum.photos/id/8/300/200',
    },
    {
      name: 'Product 9',
      price: '$99.99',
      image: 'https://picsum.photos/id/9/300/200',
    },
    {
      name: 'Product 10',
      price: '$109.99',
      image: 'https://picsum.photos/id/10/300/200',
    },
    {
      name: 'Product 11',
      price: '$119.99',
      image: 'https://picsum.photos/id/11/300/200',
    },
    {
      name: 'Product 12',
      price: '$129.99',
      image: 'https://picsum.photos/id/12/300/200',
    },
    {
      name: 'Product 13',
      price: '$139.99',
      image: 'https://picsum.photos/id/13/300/200',
    },
    {
      name: 'Product 14',
      price: '$149.99',
      image: 'https://picsum.photos/id/14/300/200',
    },
    {
      name: 'Product 15',
      price: '$159.99',
      image: 'https://picsum.photos/id/15/300/200',
    },
    {
      name: 'Product 16',
      price: '$169.99',
      image: 'https://picsum.photos/id/16/300/200',
    },
    {
      name: 'Product 17',
      price: '$179.99',
      image: 'https://picsum.photos/id/17/300/200',
    },
    {
      name: 'Product 18',
      price: '$189.99',
      image: 'https://picsum.photos/id/18/300/200',
    },
    {
      name: 'Product 19',
      price: '$199.99',
      image: 'https://picsum.photos/id/19/300/200',
    },
    {
      name: 'Product 20',
      price: '$209.99',
      image: 'https://picsum.photos/id/20/300/200',
    },
    {
      name: 'Product 21',
      price: '$219.99',
      image: 'https://picsum.photos/id/21/300/200',
    },
    {
      name: 'Product 22',
      price: '$229.99',
      image: 'https://picsum.photos/id/22/300/200',
    },
    {
      name: 'Product 23',
      price: '$239.99',
      image: 'https://picsum.photos/id/23/300/200',
    },
    {
      name: 'Product 24',
      price: '$249.99',
      image: 'https://picsum.photos/id/24/300/200',
    },
    {
      name: 'Product 25',
      price: '$259.99',
      image: 'https://picsum.photos/id/25/300/200',
    },
    {
      name: 'Product 26',
      price: '$269.99',
      image: 'https://picsum.photos/id/26/300/200',
    },
  ];

  notify() {
    this.snackbar.show('Product is not available at the moment.');
  }
}
