import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-tendero',
  templateUrl: './form-tendero.component.html',
  styleUrls: ['./form-tendero.component.css']
})
export class FormTenderoComponent implements OnInit {

  formtenderoForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  validator(){
    this.formtenderoForm = this.formBuilder.group({
    city: ['',Validators.required],
    locality: ['',Validators.required],
    upz: ['',Validators.required],
    neighborhood: ['',Validators.required]
    })
  }
}
