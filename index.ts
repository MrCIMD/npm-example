// Tipos

// string - unan cadena de caracteres
// example - 'Hola mundo' "Hola mundo"

// number - se usa para representar un numero entero o decimal
// example - 10 15.6

// boolean - se usa para guardar un true o false
// example - true false

// Date - es ubjecto que guardar informacion y metodos para la manipulacion de fechas
// example - new Date('2019-09-15') '2019-09-15'

// Variables

import { User } from './types/user.type';
import { Product } from './types/product.type';

let nombre : string  = 'Roberto';
let edad : number = 30;
let aprobado : boolean = true;
let nacimiento : Date = new Date('2000-08-14');

let algo: any;

nombre = 'Felipe'

// nombre = 'Roberto'
// edad = 30
// aprobado = true
// nacimiento = new Date('2000-08-14')

// Constantes

const nombre2 : string = 'Alberto';

// nombre2 = 'Felipe' -- ERROR

const user : User = {
    name: 'Pedro',
    age: 40,
    createdAt: new Date('2020-09-04')
}

// user.name = 'Alex';
// user.age = 24;

let { age, name, createdAt } = user;

// console.log(age)

name = 'Hola'

// Funciones

function suma (x: number, y: number): number {
    return x + y;
}

suma(5, 3);

// () => {}
const resta = (x: number, y: number): number => {
    return x - y;
}

resta(5, 3);

// Arreglos

const edades: number[] = [24, 23, 20, 1];
const nombres: string[] = ['Caleb', 'Vela', 'Alex'];

const products: Product[] = [
    {
        name: 'Coca 3L',
        price: 30
    },
    {
        name: 'Tortillas',
        price: 20
    },
]

products.forEach((value: Product, index: number) => {
     console.log(value)
});


for (const value of products) {
    console.log(value)
}

for (let i = 0; i < products.length; i++) {
    const value = products[i]

    console.log(value)
}
