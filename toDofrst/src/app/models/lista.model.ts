import { Actividad } from './actividades.model'

export class Lista {
    titulo: string = '';
    id: number = 0;
    creadaEn: Date;
    terminadaEn?: any;
    completada: boolean = false;
    item: Actividad[];

    constructor(titulo: string) {
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.completada = false;
        this.item = [];
        this.id = new Date().getTime();
    }

}