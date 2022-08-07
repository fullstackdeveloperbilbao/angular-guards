import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  actualProduct: Product;
  constructor(private activatedRoute: ActivatedRoute) {
    this.actualProduct = new Product('', '', '');
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.actualProduct = data["product"];
    });
  }
}
