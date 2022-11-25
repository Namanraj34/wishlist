import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  productsJson: any = [
    {
      id: 1,
      img: 'assets/img/skinny1.webp',
      name: 'Product',
      price: 50,
      status: true,
    },
    {
      id: 2,
      img: 'assets/img/skinny2.webp',
      name: 'Product',
      price: 60,
      status: true,
    },
    {
      id: 3,
      img: 'assets/img/skinny4.webp',
      name: 'Product',
      price: 70,
      status: true,
    },
    {
      id: 4,
      img: 'assets/img/skinny5.webp',
      name: 'Product',
      price: 80,
      status: true,
    },
    {
      id: 5,
      img: 'assets/img/skinny6.webp',
      name: 'Product',
      price: 90,
      status: true,
    },

    {
      id: 6,
      img: 'assets/img/skinny9.webp',
      name: 'Product',
      price: 90,
      status: true,
    },

    {
      id: 7,
      img: 'assets/img/skinny7.webp',
      name: 'Product',
      price: 90,
      status: true,
    },

    {
      id: 8,
      img: 'assets/img/skinny12.webp',
      name: 'Product',
      price: 90,
      status: true,
    },
  ];

  WishlistProducts: any = [];

  addToWishlist(product: any) {
    this.productsJson.map((x: any) => {
      if (x.id == product.id) {
        if (x.status == true) {
          this.WishlistProducts.push(product);
          // alert('added');
        } else {
          this.removeToWishlist(product.id);
        }
        x.status = !x.status;
      }
    });
  }

  removeToWishlist(id: any) {
    this.WishlistProducts = this.WishlistProducts.filter(
      (x: any) => x.id != id
    );

    // alert('removed');
  }
}
