import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SugerenciaService } from '../../Services/sugerencia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private sugerenciaService: SugerenciaService
  ) {
    this.validator()
  }

  ngOnInit(): void {
  }

  validator() {
    this.homeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      mensaje: ['', Validators.required]
    })
  }

  saveSugerencia() {
    console.log('campos del formulario', this.homeForm.value)
    if (this.homeForm.valid) {
      this.sugerenciaService.createSugerencia(this.homeForm.value).subscribe(
        (sugerenciaCreated) => {
          console.log(sugerenciaCreated)
          alert('Sugerencia enviada correctamente')
        },
        (error) => {
          console.error('Tuvimos un error -> ', error)
        }
      )
    } else {
      alert('La Información no es valida')
    }
  }

}