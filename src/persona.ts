export class Persona {

    private peso: number;
    private altura: number;
    private edad: number;
    private cedula: string;
    public nombre: string;


    constructor(peso: number, altura: number, cedula: string, nombre: string, edad: number) {
        this.peso = peso;
        this.altura = altura;
        this.cedula = cedula;
        this.nombre = nombre;
        this.edad = edad;
    }

    cumplirAnos() {
        this.edad++;
        console.log(`feliz cumpleañoz ${this.nombre} cumples ${this.edad}`)
    }


}