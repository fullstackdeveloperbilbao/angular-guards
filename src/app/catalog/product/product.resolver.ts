import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';

@Injectable()
export class ProductResolver implements Resolve<Product> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    console.log('Resolver');
    return this.createProduct(route.paramMap.get('id'));
  }

  createProduct(id: any) {
    const description =
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    const product = new Product(id, description, 'assets/images/cloud.png');
    return of(product);
  }
}
