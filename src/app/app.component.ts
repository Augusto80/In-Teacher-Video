import { Component, OnInit } from '@angular/core';
import {ClientesService} from './services/clientes.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'ACastro-InTeacherVideo';

  /*clientes; 

  cliente = {
    rut:null,
    nombres:null,
    apellidos:null,
    direccion:null,
    genero:null,
    celular:null,
    correo:null,
    clave:null
  }*/

  constructor (private clientesServicio:ClientesService) { }

  ngOnInit(){
    //this.obtenerClientes();
  }

  /*obtenerClientes(){
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
        }
      }
    );
  }

  seleccionarClientes(rut) {
    this.clientesServicio.seleccionarClientes(rut).subscribe(
      result => this.cliente = result[0]
    );
  }

  hayRegistros() {
    if(this.clientes == null) {
      return false;
    } else {
      return true;
    }
  }*/
}
