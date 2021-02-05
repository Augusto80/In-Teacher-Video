import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidacionesPropias } from '../class/validaciones-propias';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-add-peliculas',
  templateUrl: './add-peliculas.component.html',
  styleUrls: ['./add-peliculas.component.css']
})
export class AddPeliculasComponent implements OnInit {

  peliculas = null;

  pelicula = {
    codigo: null,
    titulo: null,
    actores: null,
    directores: null,
    inventario: null,
    descripcion: null
  }

  nuevo3: boolean = false
  nuevo4: boolean = false

  constructor(private formBuilder: FormBuilder, private clientesServicio: ClientesService) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  obtenerPeliculas() {
    this.clientesServicio.obtenerPeliculas().subscribe(
      result => this.peliculas = result
    );
  }

  altaPeliculas() {
    this.clientesServicio.altaPeliculas(this.pelicula).subscribe(
      datos => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerPeliculas();
        }
      }
    );
  }

  bajaPeliculas(codigo) {
    this.clientesServicio.bajaPeliculas(codigo).subscribe(
      datos => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerPeliculas();
        }
      }
    );
  }

  editarPeliculas() {
    this.clientesServicio.editarPeliculas(this.pelicula).subscribe(
      datos => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerPeliculas();
          this.nuevo3 = false
          this.nuevo4 = false
        }
      }
    );
  }

  seleccionarPeliculas(codigo) {
    this.clientesServicio.seleccionarPeliculas(codigo).subscribe(
      result => this.pelicula = result[0]);
    this.nuevo3 = true
    this.nuevo4 = true
  }

  hayRegistros() {
    if (this.peliculas == null) {
      return false;
    } else {
      return true;
    }
  }

  get codigo() {
    return this.registerForm.get('codigo')
  }

  get titulo() {
    return this.registerForm.get('titulo')
  }

  get actores() {
    return this.registerForm.get('actores')
  }

  get directores() {
    return this.registerForm.get('directores')
  }

  get genero() {
    return this.registerForm.get('genero')
  }

  get inventario() {
    return this.registerForm.get('inventario')
  }

  get descripcion() {
    return this.registerForm.get('descripcion')
  }

  registerForm = this.formBuilder.group({
    codigo: ['', [ValidacionesPropias.mayor0, Validators.required, Validators.maxLength(10), Validators.minLength(7), Validators.pattern(/^[1-9]\d{6,10}$/)]],
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    actores: ['', [Validators.required, Validators.minLength(7)]],
    directores: ['', [Validators.required, Validators.minLength(7)]],
    inventario: ['', [ValidacionesPropias.mayor0, Validators.required, Validators.maxLength(10), Validators.minLength(7), Validators.pattern(/^[1-9]\d{6,10}$/)]],
    descripcion: ['', [Validators.required, Validators.minLength(6)]]
  });

  submit() {
    console.log(this.registerForm.value);
  }
}
