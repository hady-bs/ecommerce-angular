import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseURL from '../constant/api';
import { Product } from '../constant/types';
@Injectable({
  providedIn: 'root',
})
export class Products {
  http = inject(HttpClient);
  getAllProducts() {
    return this.http.get<Product[]>(`${baseURL}/products`);
  }
}
