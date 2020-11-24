import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-consumidor',
  templateUrl: './form-consumidor.component.html',
  styleUrls: ['./form-consumidor.component.css']
})
export class FormConsumidorComponent implements OnInit {

  formConsumidorForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
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

  saveUser(){
    if(this.formConsumidorForm.valid){
      alert('Se va a guardar la información')
    }
    else{
      alert('El formulario no es válido')
    }
  }
}