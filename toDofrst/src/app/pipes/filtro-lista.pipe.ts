import { Lista } from './../models/lista.model';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtroLista',
  pure: false
})
export class FiltroListaPipe implements PipeTransform {

  transform(listas:Lista[], tipo: string) {
    let lista: any = [];
    switch (tipo) {
      case 'por hacer':
        lista = listas.filter((itemLista:any)=> itemLista.completada == false && itemLista.item.filter((itemActividad: any)=> itemActividad.completado == true ).length ==0);
        break;
        case 'haciendo':
          lista = listas.filter((itemLista:any)=> itemLista.completada == false && itemLista.item.filter((itemActividad: any)=> itemActividad.completado == true ).length >0);
        break;
        case 'terminado':
          lista = listas.filter((itemLista:any)=> itemLista.completada == true);
        break;
      default:
        break;
    }
    return lista;
  }

}
