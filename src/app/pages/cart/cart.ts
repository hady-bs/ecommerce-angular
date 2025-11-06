import { Component, inject, OnInit, signal } from '@angular/core';
import { LocalStorageService } from '../../services/localStorage/local-storage-service';
import { Product } from '../../constant/types';
import { CardForProduct } from '../../components/card-for-product/card-for-product';
import { Page } from '../../components/layout/page/page';
import { Header } from '../../components/header/header';
@Component({
  selector: 'app-cart',
  imports: [CardForProduct, Page, Header],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  storageController = inject(LocalStorageService);
  data = signal<Product[]>([]);
  ngOnInit(): void {
    const value = this.storageController.showForCart();
    this.data.set(value);
  }
}
