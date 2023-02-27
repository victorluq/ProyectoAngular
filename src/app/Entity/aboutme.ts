export class Aboutme {

    id!: number;
    nombre!: string;
    apellido!: string;
    profesion!: string;
    imgperfil!: string;
    descripcion_habilidades!: string;
    descripcion_proyectos!: string;
    descripcion_contacto!: string;
    url_github!: string;
    url_linkedin!: string;
    intro!: string;
    cv!: string;
    telefono!: string;
    email!: string;
    ubicacion!: string;

    public aboutme (nombre: string, apellido: string, profesion: string, imgperfil: string, descripcion_habilidades: string, descripcion_proyectos: string, descripcion_contacto: string, url_github: string, url_linkedin: string, intro: string, cv: string, telefono: string, email: string, ubicacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.imgperfil = imgperfil;        
        this.descripcion_habilidades = descripcion_habilidades;
        this.descripcion_proyectos = descripcion_proyectos;
        this.descripcion_contacto = descripcion_contacto;
        this.url_github = url_github;
        this.url_linkedin = url_linkedin;
        this.intro = intro;
        this.cv = cv;
        this.telefono = telefono;
        this.email = email;
        this.ubicacion = ubicacion;

    }
}
