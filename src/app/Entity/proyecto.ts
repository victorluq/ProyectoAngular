export class Proyecto {

    id!: number;
    titulo!: string;
    descripcion!: string;
    imgproyecto!: string;
    urllivedemo!: string;
    urlrepositorio!: string;
    fecha!: string;


    public proyecto (titulo: string, descripcion: string, imgproyecto: string, urllivedemo: string, urlrepositorio: string, fecha: string) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imgproyecto = imgproyecto;
        this.urllivedemo = urllivedemo;  
        this.urlrepositorio = urlrepositorio;  
        this.fecha = fecha;     
        
    }
}
