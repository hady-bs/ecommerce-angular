import { Component, inject, OnInit, signal } from '@angular/core';
import { Products } from '../../services/products';
import { Product } from '../../constant/types';
import { CardForProduct } from '../../components/card-for-product/card-for-product';
import { Page } from '../../components/layout/page/page';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  imports: [CardForProduct, Page, Header],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  products = inject(Products);
  data = signal<Product[]>([]);
  loading = signal(true);
  error = signal<null | Error>(null);
  ngOnInit(): void {
    this.products.getAllProducts().subscribe({
      next: (products) => {
        this.data.set(products);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(error);
        this.loading.set(false);
      },
    });
  }
}
