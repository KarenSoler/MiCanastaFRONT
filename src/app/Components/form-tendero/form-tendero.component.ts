import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-tendero',
  templateUrl: './form-tendero.component.html',
  styleUrls: ['./form-tendero.component.css']
})
export class FormTenderoComponent implements OnInit {

  formTenderoForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.validator()
  }

  ngOnInit(): void {
  }
  validator(){
    this.formTenderoForm = this.formBuilder.group({
      business: ['', Validators.required],
      nit: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      document: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required]
    })
  }

  saveUser(){
    if(this.formTenderoForm.valid){
      alert('Se va a guardar la información')
    }
    else{
      alert('El formulario no es válido')
    }
  }

}