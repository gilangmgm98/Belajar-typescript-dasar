import { Seller } from "../src/tipe-data-interface";
import { Employee, Manager } from "../src/extendable-interface";

describe('Interfaces', () => {
    it('should implement a custom interface', () => {
        const seller: Seller = {
            id: '1',
            name: 'Gilang Murdiyanto',
            nib: '12345678901234567890',
            npwp: '123456789012345',
        }

        seller.id = '2';
        seller.name = 'Muhamad Gilang';
        // seller.nib = '123213131'; //Tidak bisa merubah value karena properies readonly


        console.info(seller)
    })

    it('should implement a function interface', () => {
        interface sumFunction {
            (val1: number, val2: number): number
        }

        let calculate: sumFunction = (val1: number, val2: number) => {
            return val1 + val2;
        }

        function calculateTotalPrice(price: number, quantity: number): number {
            return price * quantity;
        }

        console.log(calculate(5, 10));
        console.log(calculateTotalPrice(10000, 5));

        expect(calculate(5, 10)).toBe(15)
        expect(calculateTotalPrice(10, 5)).toBe(50)
    })

    it('should implement indexable interface', () => {

        // cara membuat Array interface
        interface stringArray {
            [index: number]: string
        }

        const name: stringArray = ['Muhammad', 'Gilang', 'Murdiyanto']
        console.log(name)

        expect(name[0]).toBe('Muhammad')
        expect(name[2]).toBe('Murdiyanto')

        name[1] = 'Dwi'

        expect(name[1]).toBe('Dwi')

    })

    it('should implement object interface', () => {

        // cara membuat Object interface
        interface contacPerson {
            [key: string]: string
        }

        const person: contacPerson = {
            id: '1',
            name: 'Gilang',
            age: '27',
            address: 'Jakarta'
        }

        console.log(person)

        expect(person.id).toBe('1')
        expect(person.name).toBe('Gilang')
        expect(person.age).toBe('27')
        person.age = '26'
        expect(person.age).toBe('26')
        expect(person.address).toBe('Jakarta')

    })

    it('should implement extendable interface', () => {
        // implemetasi extendable interface

        const employee: Employee = {
            id: '1',
            name: 'Gilang',
            age: 26,
            division: 'IT'
        }

        const manager: Manager = {
            id: '2',
            name: 'Nova',
            age: 45,
            division: 'IT',
            numberOfEmployees: 10,
            salary: 500000
        }

        expect(employee).toHaveProperty('name', 'Gilang')
        expect(employee).toHaveProperty('division', 'IT')

        expect(manager).toHaveProperty('name', 'Nova')
        expect(manager).toHaveProperty('division', 'IT')
        expect(manager).toHaveProperty('salary', 500000)
    })

    it('should implement function in interface', () => {
        // implementasi function / method dalam interface

        interface Person {
            name: string;
            age: number;
            greet(name: string): string;
        }

        const person: Person = {
            name: 'Gilang',
            age: 26,
            greet(name: string): string {
                return `Halo, ${name}! Saya ${this.name} dan saya ${this.age} tahun.`
            }
        }

        const person2: Person = {
            name: 'Ahmad',
            age: 22,
            greet: function (name: string): string {
                return `Halo, ${name}! Saya ${this.name} dan saya ${this.age} tahun.`
            }
        }

        const person3: Person = {
            name: 'Sudrajat',
            age: 25,
            greet: (name: string): string => {
                return `Halo, ${name}! Saya ${person3.name} dan saya ${person3.age} tahun.`
            }
        }


        console.info(person.greet("Alpha"));
        console.info(person2.greet('Beta'))
        console.info(person3.greet('Cadast'));

        expect(person.greet("Alpha")).toBe("Halo, Alpha! Saya Gilang dan saya 26 tahun.")
        expect(person2.greet('Beta')).toBe("Halo, Beta! Saya Ahmad dan saya 22 tahun.")
        expect(person3.greet('Cadast')).toBe("Halo, Cadast! Saya Sudrajat dan saya 25 tahun.")
    })

    it('should support intersection type', () => {
        interface HasName {
            name: string;
        }

        interface HasAge {
            age: number;
        }

        type Person = HasName & HasAge;

        const person: Person = {
            name: 'Gilang',
            age: 26
        }

        console.info(person)
        expect(person.name).toBe('Gilang')
        expect(person.age).toBe(26)
    })
})