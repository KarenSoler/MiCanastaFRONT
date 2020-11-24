import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup 

  constructor(
    private formBuilder: FormBuilder
  ) {
     this.validator()
  }

  ngOnInit(): void {
  }
  validator(){
    this.signUpForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    password:['', Validators.required],
    address: ['', Validators.required],
    })
  }

}
