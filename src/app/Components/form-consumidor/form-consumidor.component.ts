import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-consumidor',
  templateUrl: './form-consumidor.component.html',
  styleUrls: ['./form-consumidor.component.css']
})
export class FormConsumidorComponent implements OnInit {

  formconsumidorForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  validator(){
    this.formconsumidorForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['',Validators.required],
    user: ['', Validators.required]
    })
  }

}
