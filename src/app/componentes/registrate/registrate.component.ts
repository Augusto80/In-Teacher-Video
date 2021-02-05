import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidacionesPropias } from '../class/validaciones-propias';
import {ClientesService} from '../../services/clientes.service'; 

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})
export class RegistrateComponent implements OnInit {

  clientes = null; 

  cliente = {
    rut:null,
    nombres:null,
    apellidos:null,
    direccion:null,
    genero:null,
    celular:null,
    correo:null,
    clave:null
  }

  nuevo:boolean=false
  nuevo2:boolean=false
  constructor(private formBuilder: FormBuilder, private clientesServicio:ClientesService) { }

  /*ngOnInit(): void {
  }*/

  ngOnInit(){
    this.obtenerClientes();
  }

  obtenerClientes(){
    this.clientesServicio.obtenerClientes().subscribe(
      result  => this.clientes = result
    );
  }

  altaClientes() {
    this.clientesServicio.altaClientes(this.cliente).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerClientes();
        }
      }
    );
  }

  bajaClientes(rut) {
    this.clientesServicio.bajaClientes(rut).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerClientes();
        }
      }
    );
  }

  editarClientes() {
    this.clientesServicio.editarClientes(this.cliente).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerClientes();
          this.nuevo=false
          this.nuevo2=false
        }
      }
    );
  }

  seleccionarClientes(rut) {
    this.clientesServicio.seleccionarClientes(rut).subscribe(
      result => this.cliente = result[0]);
      this.nuevo=true
      this.nuevo2=true
  }

  hayRegistros() {
    if(this.clientes == null) {
      return false;
    } else {
      return true;
    }
  }


  get rut() {
    return this.registerForm.get('rut')
  }

  get nombres() {
    return this.registerForm.get('nombres')
  }

  get apellidos() {
    return this.registerForm.get('apellidos')
  }

  get direccion() {
    return this.registerForm.get('direccion')
  }

  get genero() {
    return this.registerForm.get('genero')
  }

  get celular() {
    return this.registerForm.get('celular')
  }

  get clave() {
    return this.registerForm.get('clave')
  }

  get correo() {
    return this.registerForm.get('correo')
  }


  registerForm = this.formBuilder.group({
    rut: ['', [ValidacionesPropias.mayor0,Validators.required, Validators.maxLength(11), Validators.minLength(7), Validators.pattern(/^[1-9]\d{6,10}$/)]],
    nombres: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required, Validators.minLength(3)]],
    direccion: ['', [Validators.required, Validators.minLength(3)]],
    genero: ['', [Validators.required]],
    celular: ['', [ValidacionesPropias.mayor0,Validators.required, Validators.maxLength(10), Validators.minLength(7), Validators.pattern(/^[1-9]\d{6,10}$/)]],
    clave: ['', [Validators.required,Validators.minLength(6)]],
    correo: ['', [Validators.required,Validators.email]]
  });

  

  submit() {
    console.log(this.registerForm.value);
  }
}
