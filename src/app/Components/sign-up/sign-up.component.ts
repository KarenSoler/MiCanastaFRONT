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
  ) { }

  ngOnInit(): void {
  }
  validator(){
    this.signUpForm = this.formBuilder.group({
      
    })
  }

}
