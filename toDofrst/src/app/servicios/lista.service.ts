import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  public listas: any[] = []; //almacena listas de actividades

  constructor() {}

  /** 
  *@function crearLista
  *@description Guarda en el arreglo de listas un nuevo objeto o nueva lista a partir del nombre de la lista
  *@param {string} nombreLista el nombre de la lista
   **/
  crearLista(nombreLista: string){
    let objetoLista = {
      titulo: nombreLista,
      id: 0,
      creadaEn: new Date(),
      terminadaEn: null,
      completada: false,
      item: [],
    };
    this.listas.push(objetoLista);
    this.guardarLocal()
    return objetoLista.id;
  }

  /** 
  *@function guardarLocal
  *@description Guarda de manera local las listas 
   **/
  guardarLocal() {
    let stringListas: string = JSON.stringify(this.listas);
    localStorage.setItem('listas', stringListas);
  }
}
