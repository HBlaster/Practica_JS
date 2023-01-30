import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertController,ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  characters = []
  url = 'https://rickandmortyapi.com/api/character'

  constructor(
    private http: HttpClient,
    public toastController: ToastController,
    public alertcontroller: AlertController
  ) {
    
  }

  ngOnInit(){
      this.http.get<any>(this.url)
      .subscribe(data =>{
        this.characters = data.results
        console.log(this.characters)
      })
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
            this.validInput(data)
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
