import { Lista } from './../models/lista.model';
import { ListaService } from './../servicios/lista.service';
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public listaService: ListaService
  ) { }

  listas = this.listaService.listas

  // listaItem:any =[]

  /**
   *@function agregarAct
   *@description Se ejecuta cuando el usuario le da click en agregar, para agregar una actividad
   **/
  async agregarAct() {
    let alert = await this.alertController.create({
      header: 'Asignar acuerdo',
      inputs: [
        {
          type: 'text',
          name: 'titulo',
          placeholder: 'Titulo',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Crear',
          handler: (data: any) => {
            let isValid: boolean = this.validInput(data);
            if (isValid) {
              let titulo = data.titulo;
              this.listaService.crearLista(titulo);
              this.presentToast('La tarea fue creada corretamente');
            }
            console.log(data);
          },
        },
      ],
    });
    await alert.present();
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

  /**
   *@function editarLista
   *@description Editar lista de tareas
   *@param {any} listaItem valor que se va a editar
   **/
  editarLista(listaItem: Lista) {
    console.log("Editar", listaItem)
  }

  /**
   *@function eliminarLista
   *@description elminar lista de tareas
   *@param {any} listaItem valor que se va a eliminar
   **/
  async eliminarLista(listaItem: Lista) {
    await this.listaService.eliminarTarea(listaItem);
    console.log("Se elimino lista", listaItem);
    this.listas = await this.listaService.listas;
  }
}
