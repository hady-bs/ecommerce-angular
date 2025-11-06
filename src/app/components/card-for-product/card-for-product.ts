import { Component, inject, Input, input } from '@angular/core';
import { Product } from '../../constant/types';
import { MatIconModule } from '@angular/material/icon';
import { LocalStorageService } from '../../services/localStorage/local-storage-service';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-card-for-product',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './card-for-product.html',
  styleUrl: './card-for-product.css',
})
export class CardForProduct {
  @Input() product!: Product;
  storageController = inject(LocalStorageService);
}
