export class Experiencia {

    id!: number;
    imgExp!: string;
    sizeImg!: string; 
    puesto!: string;
    inicio!: string;
    fin!: string;
    empresa!: string;
    descripcionExp!: string;
    esTrabajoActual!: Boolean;
       
    public experiencia(imgExp: string, sizeImg: string, puesto: string, inicio: string, fin: string, empresa: string, descripcionExp: string, esTrabajoActual: Boolean) {
        this.imgExp = imgExp;
        this.sizeImg = sizeImg;
        this.puesto = puesto;
        this.inicio = inicio;
        this.fin = fin;
        this.empresa = empresa;
        this.descripcionExp = descripcionExp;
        this.esTrabajoActual = esTrabajoActual;
    }

}
