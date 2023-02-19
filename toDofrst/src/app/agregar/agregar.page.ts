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

}
