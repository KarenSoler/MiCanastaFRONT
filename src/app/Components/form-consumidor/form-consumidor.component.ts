import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import {ClientService} from '../../Services/client.service'

@Component({
  selector: 'app-form-consumidor',
  templateUrl: './form-consumidor.component.html',
  styleUrls: ['./form-consumidor.component.css']
})
export class FormConsumidorComponent implements OnInit {

  formConsumidorForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) { 
    this.validator()
  }

  ngOnInit(): void {
  }
  
  validator(){
    this.formConsumidorForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['',[Validators.required, Validators.minLength(6)]],
    repeatPassword: ['', Validators.required]
    })
  }

  saveConsumidor(){
    if(this.formConsumidorForm.valid){
      this.clientService.createConsumidor(this.formConsumidorForm.value).subscribe(
        (consumidorCreated) => {
          console.log(consumidorCreated)
          alert('Usuario creado correctamente.')
        },
        (error) => {
          console.error('Tuvimos un errror.', error)
        }
      )
    }else{
      alert('El formulario no es válido')
    }
  }
}