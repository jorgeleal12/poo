import { Persona } from './persona';


export class Empleado extends Persona {
    private salario: number;

    constructor(peso: number, altura: number, cedula: string, nombre: string, edad: number, salario: number) {
        super(peso, altura, cedula, nombre, edad)
        this.salario = salario;
    }

    presentarSalario(): void {
        console.log(`Soy ${this.nombre} y mi salario es ${this.salario}`)
    }

}