import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  URL = "http://localhost/inteacher/";

  constructor(private http: HttpClient) { }

  obtenerClientes() {
    return this.http.get(`${this.URL}ObtenerClientes.php`);
  }

  altaClientes(cliente) {
    return this.http.post(`${this.URL}AltaClientes.php`, JSON.stringify(cliente));
  }

  bajaClientes(rut: string) {
    return this.http.get(`${this.URL}BajaClientes.php?rut=${rut}`);
  }

  seleccionarClientes(rut: number) {
    return this.http.get(`${this.URL}SeleccionarClientes.php?rut=${rut}`);
  }

  editarClientes(cliente) {
    return this.http.post(`${this.URL}EditarClientes.php`, JSON.stringify(cliente));
  }

  loginClientes(login) {
    return this.http.post(`${this.URL}Login.php`, JSON.stringify(login));
  }

  obtenerPeliculas() {
    return this.http.get(`${this.URL}ObtenerPeliculas.php`);
  }

  altaPeliculas(pelicula) {
    return this.http.post(`${this.URL}AltaPeliculas.php`, JSON.stringify(pelicula));
  }

  bajaPeliculas(codigo: string) {
    return this.http.get(`${this.URL}BajaPeliculas.php?codigo=${codigo}`);
  }

  seleccionarPeliculas(codigo: string) {
    return this.http.get(`${this.URL}SeleccionarPeliculas.php?codigo=${codigo}`);
  }

  editarPeliculas(pelicula) {
    return this.http.post(`${this.URL}EditarPeliculas.php`, JSON.stringify(pelicula));
  }
  
}