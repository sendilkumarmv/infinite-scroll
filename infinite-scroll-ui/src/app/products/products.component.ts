import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { ProductsService } from './service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
   this.productService.getProducts().subscribe( (data: Product[]) => {
    this.products.push(...data);
   });
  }

  onScroll() {
    this.productService.getProducts().subscribe( (data: Product[]) => {
      this.products.push(...data);
     });
  }
}
