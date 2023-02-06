import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from './products';


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string = '';


  // private _productService;
  //  constructor(productService : ProductService) {
  //   this._productService = productService;
  //  }

  constructor(private productService : ProductService){

  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log(this._listFilter);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
    products: IProduct[] = [];



  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {

    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLowerCase().includes(filterBy)
    );
  }

  onRatinggClicked(message: string): void {
    this.pageTitle = 'Product List ' + message;
  }


}
