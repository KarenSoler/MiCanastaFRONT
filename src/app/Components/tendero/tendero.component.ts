import { Component, OnInit, Input } from '@angular/core';
import { SurtidoService } from '../../Services/surtido.service';
import { TenderoService } from '../../Services/tendero.service';
import { Surtido } from '../../Models/surtido';
import { Tendero } from '../../Models/tendero';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tendero',
  templateUrl: './tendero.component.html',
  styleUrls: ['./tendero.component.css']
})
export class TenderoComponent implements OnInit {
  @Input() surtido: Surtido;

  surtidos: Surtido[] = [];
  tendero: Tendero;
  borrar: '';
 

  constructor(
    private surtidoService: SurtidoService,
    private tenderoService: TenderoService,
    private route: ActivatedRoute,
  ){}
  
  ngOnInit(){
    this.fetchSurtido();
    this.fetchTendero();

    }

  fetchSurtido() {
    this.surtidoService.getAll()
    .subscribe(surtidos => {
      this.surtidos = surtidos;
      console.log(surtidos)
    })
  }
  fetchTendero() {
    this.tenderoService.getOne()
    .subscribe(tendero => {
      this.tendero = tendero;
      console.log(tendero)
    })
  }
  nProduct:'';
  pProduct:'';
  qProduct:'';
  iProduct:'';
  tProdut:'';

  createProduct(valor){
    const newSurtido: Surtido = {
        nameProduct: this.nProduct,
        priceProduct: this.pProduct,
        quantityProduct: this.qProduct,
        image: this.iProduct,
        tendero: valor,
    }
    this.surtidoService.create(newSurtido)
    .subscribe(surtido => {
      this.ngOnInit()
    })
  }

  updateProduct(id){
    const updateSurtido: Partial<Surtido> = {
      nameProduct: 'Otro',

    }
    this.surtidoService.update(id,updateSurtido)
    .subscribe(surtido => {
      this.ngOnInit()
    })
  }
  deleteProduct(id) {
    this.surtidoService.deleteOne(id)
    .subscribe(surtido => {
      this.ngOnInit()
    })
  }

}