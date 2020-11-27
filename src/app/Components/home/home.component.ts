import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SugerenciaService } from '../../Services/sugerencia.service';
import { ProductService} from '../../Services/product.service';
import { Product } from '../../Models/product';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() product:Product

  homeForm: FormGroup;
  products: Product[] = []; 
  search='';

  constructor(
    private formBuilder: FormBuilder,
    private sugerenciaService: SugerenciaService,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {
    this.validator()
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => { const productName = params.productName
      this.fetchProduct(productName)
    });
  }

  validator() {
    this.homeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      mensaje: ['', Validators.required]
    })
  }

  saveSugerencia() {
    console.log('campos del formulario', this.homeForm.value)
    if (this.homeForm.valid) {
      this.sugerenciaService.createSugerencia(this.homeForm.value).subscribe(
        (sugerenciaCreated) => {
          console.log(sugerenciaCreated)
          alert('Sugerencia enviada correctamente')
        },
        (error) => {
          console.error('Tuvimos un error -> ', error)
        }
      )
    } else {
      alert('La Información no es valida')
    }
  }

  fetchProduct(productName:string){    
    this.productService.getProduct(productName)
    .subscribe (products => {
      console.log(products)
      this.products=products
    })
  }

}