import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public alertcontroller: AlertController,
  ) {
    
  }

  async agregarAct(){
    let alert = await this.alertcontroller.create({
      header: "Asignar acuerdo",
      inputs: [
        {
          type:"text",
          name: "titulo",
          placeholder:" Titulo"
        }
      ],
      buttons:[
        {
          text:"Cancelar",
          role:"cancel"
        },
        {
          text:"Crear",
          handler:(data: any)=>{
            console.log(data)
          }
          
        }
      ]
    })

    await alert.present()
  }

  validInput(input: any): boolean{
    if(input && input.titulo){
      console.log("correcto")
      return true
    } else {
      console.log("input vacio")
      return false
    }
  }

}
