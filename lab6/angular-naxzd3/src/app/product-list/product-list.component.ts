import {Component, OnInit} from '@angular/core';

import { products,Product,Category } from '../products';
import { CategoryComponent} from '../category/category.component'
import {ActivatedRoute} from "@angular/router";
import { CategoryService } from '../category-service.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories()
        .subscribe(categories => this.categories = categories);
  }
}

// export class ProductListComponent {
//   category: string = '';
//   constructor(private route: ActivatedRoute) {
//
//    }
//
//   ngOnInit() {
//     this.category = this.route.snapshot.paramMap.get('category.name')??'';
//
//   }
//   getRes(): void{
//     this.category = this.route.snapshot.paramMap.get('category.name')??'';
//     // this.productList = this.getProduct()
//   }
//   // productss =[...products] ;
//   productList: Product[]=[];
 

  // getProduct(): Product[]{
  //   if(this.category==='all'){
  //     this.productList=[]
  //     for (let product of this.productss){
  //       this.productList.push(product)
  //     }
  //   }
  //   else {
  //     this.productList=[]
  //     for (let product of products){
  //       if(this.category === product.category)
  //       this.productList.push(product)
  //     }
  //   }
  //   return this.productList;
  // }

 
//   onCategorySelected(categoryName: string) {
//     this.category = categoryName
//     // this.getProduct()
//     // Do something with the selected category
//   }
//
//
// }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
