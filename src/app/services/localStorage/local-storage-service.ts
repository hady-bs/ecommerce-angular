import { Injectable } from '@angular/core';
import { Product } from '../../constant/types';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private FAVORITE_KEY = 'favorite';
  private CART_KEY = 'cart';

  // Add product to favorites array in localStorage
  addForFavorite(item: Product) {
    const favoritesJson = localStorage.getItem(this.FAVORITE_KEY);
    const favorites: Product[] = favoritesJson ? JSON.parse(favoritesJson) : [];
    const exists = favorites.find((fav) => fav.id === item.id);
    if (!exists) {
      favorites.push(item);
      localStorage.setItem(this.FAVORITE_KEY, JSON.stringify(favorites));
    }
  }

  // Remove product from favorites array in localStorage
  removeForFavorite(item: Product) {
    const favoritesJson = localStorage.getItem(this.FAVORITE_KEY);
    if (!favoritesJson) return;
    const favorites: Product[] = JSON.parse(favoritesJson);
    const filtered = favorites.filter((fav) => fav.id !== item.id);
    localStorage.setItem(this.FAVORITE_KEY, JSON.stringify(filtered));
  }

  // Get all favorite products
  showForFavorite(): Product[] {
    const favoritesJson = localStorage.getItem(this.FAVORITE_KEY);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  }

  // Add product to cart array in localStorage
  addForCart(item: Product) {
    const cartJson = localStorage.getItem(this.CART_KEY);
    const cart: Product[] = cartJson ? JSON.parse(cartJson) : [];
    const exists = cart.find((cartItem) => cartItem.id === item.id);
    if (!exists) {
      cart.push(item);
      localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
    }
  }

  // Remove product from cart array in localStorage
  removeForCart(item: Product) {
    const cartJson = localStorage.getItem(this.CART_KEY);
    if (!cartJson) return;
    const cart: Product[] = JSON.parse(cartJson);
    const filtered = cart.filter((cartItem) => cartItem.id !== item.id);
    localStorage.setItem(this.CART_KEY, JSON.stringify(filtered));
  }

  // Get all products in cart
  showForCart(): Product[] {
    const cartJson = localStorage.getItem(this.CART_KEY);
    return cartJson ? JSON.parse(cartJson) : [];
  }
}
