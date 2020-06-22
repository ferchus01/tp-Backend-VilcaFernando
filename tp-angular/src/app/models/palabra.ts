export class Palabra {
    id: number;
    imagen: string;
    espaniol: string;
    ingles: string;

    Palabra (id: number, imagen?: string, espaniol?: string, ingles?: string) {
        this.id = id;
        this.imagen = imagen;
        this.espaniol = espaniol;
        this.ingles = ingles;
    }
}

