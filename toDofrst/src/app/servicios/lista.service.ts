import { Lista } from './../models/lista.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  public listas: Lista[] = []; //almacena listas de actividades

  listaItem: any

  constructor() {
    this.cargarLocalStorage();

  }
  

  /** 
  *@function crearLista
  *@description Guarda en el arreglo de listas un nuevo objeto o nueva lista a partir del nombre de la lista
  *@param {string} nombreLista el nombre de la lista
   **/
  crearLista(nombreLista: string){
    let objetoLista = new Lista(nombreLista);
    this.listas.unshift(objetoLista);
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
  

  /** 
  *@function cargarLocal
  *@description Realiza cargado de la informacion de las listas
   **/
  cargarLocalStorage() {
    const listasStorage = localStorage.getItem('listas');
    if (listasStorage == null){
      return this.listas=[];
    } let objListas = JSON.parse(listasStorage)
      return this.listas= objListas;
  }

  /**
   *@function eliminarTarea
   *@description elminar lista de tareas
   *@param {any} lista valor que se va a eliminar
   **/
  eliminarTarea(lista:Lista){
    let newLista = this.listas.filter((listaItem)=> listaItem.id != lista.id);
    this.listas = newLista;
    this.guardarLocal();
  }

  /**
   *@function editarLista
   *@description edicion lista de tareas
   *@param {any} listaItem valor que se va a editar
   **/
   editarTarea(lista:Lista){
    let matchLista = this.listas.find((listaItem)=> listaItem.id == lista.id)
    if(matchLista){
      matchLista.titulo = lista.titulo ;
    }
    this.guardarLocal();
  }

  /**
   *@function obtenerLista
   *@description edicion lista de tareas
   *@param {any} listaItem valor que se va a editar
   **/
   obtenerLista(idLista: any){
    const id = Number(idLista);
    let matchLista = this.listas.find((listaItem)=> listaItem.id == id);
    return matchLista;

   }

 

}
