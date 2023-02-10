export class HabilidadesBack {
    id!: number;
    habilidad!: string;
    icono!: string;
    nivel!: string;
    porcentajeProgreso!: string;

    public habilidadesBack (habilidad: string, icono: string, nivel: string, porcentajeProgreso: string) {
        this.habilidad = habilidad;
        this.icono = icono;
        this.nivel = nivel;
        this.porcentajeProgreso = porcentajeProgreso;        
    }
}
