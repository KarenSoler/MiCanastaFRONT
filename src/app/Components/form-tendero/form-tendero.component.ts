import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { TenderoService } from '../../Services/tendero.service'

@Component({
  selector: 'app-form-tendero',
  templateUrl: './form-tendero.component.html',
  styleUrls: ['./form-tendero.component.css']
})
export class FormTenderoComponent implements OnInit {

  formTenderoForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private tenderoService: TenderoService
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
      locality: ['', Validators.required],
      neighborhood: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required]
    })
  }

  saveTendero(){
    if(this.formTenderoForm.valid){
      this.tenderoService.createTendero( this.formTenderoForm.value).subscribe(
        (tenderoCreated) => {
          console.log(tenderoCreated)
          alert('Tendero creado correctamente.')
        },
        (error) => {
          console.error('Tuvimos un error.', error)
        }
      )
    }else{
      alert('El formulario no es válido')
    }
  }

}