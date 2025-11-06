import { Component, inject, OnInit, signal } from '@angular/core';
import { LocalStorageService } from '../../services/localStorage/local-storage-service';
import { Product } from '../../constant/types';
import { CardForProduct } from '../../components/card-for-product/card-for-product';
import { Page } from '../../components/layout/page/page';
import { Header } from '../../components/header/header';
@Component({
  selector: 'app-favorite',
  imports: [CardForProduct, Page, Header],
  templateUrl: './favorite.html',
  styleUrl: './favorite.css',
})
export class Favorite implements OnInit {
  localStorageController = inject(LocalStorageService);
  data = signal<Product[]>([]);
  ngOnInit(): void {
    const products = this.localStorageController.showForFavorite();
    this.data.set(products);
    console.log(this.data());
  }
}
