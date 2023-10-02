import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-llamados',
  templateUrl: './tabla-llamados.component.html',
  styleUrls: ['./tabla-llamados.component.css']
})
export class TablaLlamadosComponent {
  formularioLlamado = this.fb.group({
    fecha: new FormControl('', Validators.required),
    hora: new FormControl('',Validators.required),
    salaLlamado: new FormControl('', Validators.required),
    tipoLlamado: new FormControl('', Validators.required),
    atendido: new FormControl('', Validators.required)
  });
  
  constructor(private fb:FormBuilder, private router:Router) {}
}
