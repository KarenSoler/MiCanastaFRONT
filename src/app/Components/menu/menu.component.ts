import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  search: String;

  constructor(
    private productService: ProductService, 
   

  ) { }

  ngOnInit() {
   
  }

 

}
