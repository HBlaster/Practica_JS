import { Lista } from './../models/lista.model';
import { Actividad } from './../models/actividades.model';
import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ListaService} from 'src/app/servicios/lista.service';
import { AlertController, ToastController } from '@ionic/angular';


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
    public alertController: AlertController,
    public toastController: ToastController,
  ) {
    let idLista = this.Router.snapshot.paramMap.get('idLista');
    this.listaRecibida = this.ListaService.obtenerLista(idLista);
    console.log("lista recibida: ", this.listaRecibida);
   }

  ngOnInit() {
  }

      /**
   *@function validInput
   *@description Valida que no se esten enviando valores nulos
   *@param {any} input valor ingresado por el usuario
   **/
   validInput(input: any): boolean {
    if (input && input.titulo) {
      console.log('correcto');
      return true;
    } else {
      console.log('input vacio');
      this.presentToast('debe ingresar un valor');
      return false;
    }
  }

      /**
   *@function presentToast
   *@description Muestra mensaje que fue pasado por parametro
   *@param {string} mensaje mensaje que se mostrara en el toast
   **/
   async presentToast(mensaje: string) {
    let toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
    });
    toast.present();
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
  
  
    /**
   *@function editarAct
   *@description Se ejecuta cuando el usuario le da click en editar, para editar una actividad
   **/
   async editarAct( Actividad:Actividad){
    let alert = await this.alertController.create({
      header: 'Editar Actividad',
      inputs: [
        {
          type: 'text',
          name: 'titulo',
          placeholder: 'Ingresar nombre de la actividad',
          value: Actividad.descripcion
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Editar',
          handler: (data: Lista) =>{
            let isValid: boolean = this.validInput(data);
            if(isValid){
              let titulo = data.titulo;
              Actividad.descripcion = titulo;
              this.ListaService.guardarLocal();
              this.presentToast("La tarea se edito correctamente");
            }
            console.log(data);
          },
        },
      ],
    });
    await alert.present();
  }

  editar(lista: Lista, Actividad:Actividad){
    console.log("Editar", lista, Actividad);
    this.editarAct(Actividad);
  }

  borrar(actividad:Actividad){
    this.listaRecibida.item= this.listaRecibida.item.filter((item: Actividad) => item !== actividad);
    this.ListaService.guardarLocal();
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
