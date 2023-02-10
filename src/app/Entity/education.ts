export class Education {
    
    id!: number;
    imgEdu!: string;
    sizeImg!: string; 
    titulo!: string;
    inicio!: string;
    fin!: string;
    institucion!: string;
    descripcionEdu!: string;
    esEstudioActual!: Boolean;

    public education (imgEdu: string, sizeImg: string, titulo: string, inicio: string, fin: string, institucion: string, descripcionEdu: string, esEstudioActual: Boolean) {
        this.imgEdu = imgEdu;
        this.sizeImg = sizeImg;
        this.titulo = titulo;
        this.inicio = inicio;
        this.fin = fin;
        this.institucion = institucion;
        this.descripcionEdu = descripcionEdu;
        this.esEstudioActual = esEstudioActual;
    }

}
