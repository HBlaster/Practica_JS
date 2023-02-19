import { AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {ListaService} from 'src/app/servicios/lista.service';
import {Lista} from 'src/app/models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  constructor(
    public ListaService: ListaService,
    public alertController: AlertController,
    public toastController: ToastController,
    private router: Router
  ) { }

    listas = this.ListaService.listas
    
  ngOnInit() {}

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


  /**
   *@function editarAct
   *@description Se ejecuta cuando el usuario le da click en editar, para editar una actividad
   **/
  async editarAct(lista: Lista){
    let alert = await this.alertController.create({
      header: 'Editar Acuerdo',
      inputs: [
        {
          type: 'text',
          name: 'titulo',
          placeholder: 'Titulo',
          value: lista.titulo
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
              lista.titulo = titulo;
              this.ListaService.editarTarea(lista);
              this.presentToast("La tarea se edito correctamente");
            }
            console.log(data);
          },
        },
      ],
    });
    await alert.present();
  }




  editarLista(lista: Lista){
    this.editarAct(lista);
  }

   /**
   *@function eliminarLista
   *@description elminar lista de tareas
   *@param {any} lista valor que se va a eliminar
   **/
  async eliminarLista( lista: Lista){
    await this.ListaService.eliminarTarea(lista);
    await console.log("Se elimino la tarea");
    this.listas = await this.ListaService.listas;
  }

  listaSeleccionada(listaItem: Lista){
    console.log(listaItem);
    const URL = '/agregar/'+listaItem.id;
    this.router.navigateByUrl(URL);
  }


}
