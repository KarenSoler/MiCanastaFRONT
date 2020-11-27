import { Component, OnInit, Input } from '@angular/core';
import { PedidoService } from '../../Services/pedido.service';
import { ClientService } from '../../Services/client.service';
import { Pedido } from '../../Models/pedido';
import { Cliente } from '../../Models/cliente';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class PedidoComponent implements OnInit {
  @Input() pedido: Pedido;

  pedidos: Pedido[] = [];
  cliente: Cliente;
  borrar: '';
 

  constructor(
    private pedidoService: PedidoService,
    private clienteService: ClientService,
    private route: ActivatedRoute,
  ){}
  
  ngOnInit(){
    this.fetchPedido();
    this.fetchCliente();

    }

  fetchPedido() {
    this.pedidoService.getAll()
    .subscribe(pedidos => {
      this.pedidos = pedidos;
      console.log(pedidos)
    })
  }
  fetchCliente() {
    this.clienteService.getOne()
    .subscribe(cliente => {
      this.cliente = cliente;
      console.log(cliente)
    })
  }
  nProduct:'';
  pProduct:'';
  qProduct:'';
  iProduct:'';
  tProdut:'';

  createProduct(valor){
    
    const newPedido: Pedido = {
      nameProduct: this.nProduct,
      priceProduct: this.pProduct,
      quantityProduct: this.qProduct,
      image: this.iProduct,
      cliente: valor,
    }
    console.log(newPedido)
    this.pedidoService.create(newPedido)
    .subscribe(pedido => {
      console.log(pedido)
      this.ngOnInit()
    })
  }
// Futura implementacion actualizar
  updateProduct(id){
    const updatePedido: Partial<Pedido> = {
      nameProduct: 'Otro',

    }
    this.pedidoService.update(id,updatePedido)
    .subscribe(pedido => {
      this.ngOnInit()
    })
  }
// hasta acá
  deleteProduct(id) {
    this.pedidoService.deleteOne(id)
    .subscribe(pedido => {
      this.ngOnInit()
    })
  }

}