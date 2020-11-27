import { Component, OnInit } from '@angular/core';
import { LocalidadesService  } from '../../Services/localidades.service';
import { Router } from '@angular/router';
import {} from '../../Services/barrio.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',
  styleUrls: ['./localidades.component.css']
})
export class LocalidadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
