import { Lista } from './../models/lista.model';
import { Actividad } from './../models/actividades.model';
import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ListaService} from 'src/app/servicios/lista.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  listaRecibida : any;
  nombreItem:string ='';
  constructor(
    private Router: ActivatedRoute,
    public ListaService: ListaService,
  ) {
    let idLista = this.Router.snapshot.paramMap.get('idLista');
    this.listaRecibida = this.ListaService.obtenerLista(idLista);
    console.log("lista recibida: ", this.listaRecibida);
   }

  ngOnInit() {
  }

  agregar(){
    if(this.nombreItem.length===0){
      return
    } else {
      let actividad = new Actividad(this.nombreItem);
      this.listaRecibida.item.unshift(actividad);
      this.ListaService.guardarLocal();
      this.nombreItem = '';
    }

    console.log("actividad asignada, arreglo con actividad guardada: ", this.listaRecibida);
  }
  editar(listaRecibida:Lista,actividad:Actividad){
    console.log("Editar:", listaRecibida, actividad);
  }

  borrar(actividad:Actividad){
    console.log("Borrar:", actividad);
  }

  cambiaCheck(){
    var pendientes = this.listaRecibida.item.filter((item: any) => item.completado == false).length;
    console.log("Actividades pendientes: ",pendientes);
    if(pendientes == 0){
      this.listaRecibida.completada = true;
      this.listaRecibida.terminadaEn = new Date();
    } else {
      this.listaRecibida.completada = false;
      this.listaRecibida.terminadaEn = null;
    }
    this.ListaService.guardarLocal();
  }
}
