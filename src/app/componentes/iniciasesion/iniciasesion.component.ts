import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,NgForm  } from '@angular/forms';
import {ClientesService} from '../../services/clientes.service'; 
import { ValidacionesPropias } from '../class/validaciones-propias';
import { Router } from "@angular/router";
import { Route } from '@angular/compiler/src/core'

@Component({
  selector: 'app-iniciasesion',
  templateUrl: './iniciasesion.component.html',
  styleUrls: ['./iniciasesion.component.css']
})
export class IniciasesionComponent implements OnInit {

  login = {
    rut: null,
    clave: null
  }

  loginClientes() {
    this.loginService.loginClientes(this.login).subscribe (
      datos => {
        if(datos['resultado'] == 'OK') {
          if (this.login['rut'] == '88888888'){
            this.router.navigateByUrl("/admin");
          } else  {
            this.router.navigateByUrl("/inicio");
          }

          //alert(datos['mensaje']);
          //this.router.navigateByUrl("/admin");
          //console.log(datos); 

        } else {
          alert(datos['mensaje']);
        }
      }
    );
  }

  /*LoginClientes(){
    this.loginService.loginClientes(this.login).subscribe(
      result => this.Usuarios = result[0]);

      if(this.Usuarios.tiporol=="1"){
        this.router.navigateByUrl("/inicio");
      }
    }*/

  constructor(private formBuilder: FormBuilder,private loginService: ClientesService,public router: Router) { }

  get rut() {
    return this.registerForm.get('rut')
  }

  get clave() {
    return this.registerForm.get('clave')
  }

  registerForm = this.formBuilder.group({
    rut: ['', [ValidacionesPropias.mayor0,Validators.required, Validators.maxLength(11), Validators.minLength(7), Validators.pattern(/^[1-9]\d{6,10}$/)]],
    clave: ['', [Validators.required,Validators.minLength(6)]],
  });

  ngOnInit(): void {
  }

  submit() {
    if (!this.registerForm.valid) {
      alert('Alguna regla de validación no se está cumpliendo');
      return;
    }
    console.log(this.registerForm.value);
  }
}
