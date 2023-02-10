export class HabilidadesFront {

    id!: number;
    habilidad!: string;
    icono!: string;
    nivel!: string;
    porcentajeProgreso!: string;

    public habilidadesFront (habilidad: string, icono: string, nivel: string, porcentajeProgreso: string) {
        this.habilidad = habilidad;
        this.icono = icono;
        this.nivel = nivel;
        this.porcentajeProgreso = porcentajeProgreso;        
        
    }
        
    }
