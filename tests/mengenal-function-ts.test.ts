describe('mengenal function lebih dalam pada TS', () => {
    it('menggunakan arrow function', () => {
        function sayHello(name: string): string {
            consoleHello(name);
            return `Hello, ${name}!`
        }

        // expect(sayHello('Kevin')).toEqual('Hello, Kevin!')

        function consoleHello(name: string): void {
            console.log(`Hello, ${name}!`)
        }

        consoleHello('Kevin')

        expect(sayHello("Syxtemgm")).toBe("Hello, Syxtemgm!")
    })

    it('it should support defaut values', () => {
        function greet(name: string = 'World'): string {
            return `Hello, ${name}!`
        }

        expect(greet()).toBe('Hello, World!')
        expect(greet('Gilang')).toBe('Hello, Gilang!')
    })

    it('should support rest parameters', () => {
        function sum(...numbers: number[]): number {
            let count = 0
            for (const number of numbers) {
                count += number;
            }
            return count
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15)
        expect(sum(1, 2, 3)).toBe(6)
    })

    it('should support optional parameters', () => {
        function greet(firstName: string = 'Guess', lastName?: string, fullName?: string): string {
            if (fullName) {
                return `Hello, ${fullName}`
            } else if (lastName) {
                return `Hello, ${firstName} ${lastName}`
            } else {
                return `Hello, ${firstName}`
            }
        }

        expect(greet()).toBe('Hello, Guess')
        expect(greet('Gilang')).toBe('Hello, Gilang')
        expect(greet('Gilang', 'Murdiyanto')).toBe('Hello, Gilang Murdiyanto')
        expect(greet('Gilang', 'Murdiyanto', 'Muhammad Gilang Murdiyanto')).toBe('Hello, Muhammad Gilang Murdiyanto')
    })

    it('should support function as parameter', () => {
        function sayHello(name: string, filter: (name: string) => string) {
            return `Hello, ${filter(name)}!`
        }

        function toUpperCase(name: string) {
            return name.toUpperCase()
        }

        function toLowerCase(name: string) {
            return name.toLowerCase()
        }

        function customizeName(name: string) {
            let tmp = []
            let lengthName = name.length
            let count = 1

            // console.log(lengthName)

            for (let e of name) {
                tmp.push(e)
                if (count < lengthName){
                    tmp.push('><')
                }
                count++;
            }

            // console.log(tmp)

            let newName = tmp.join('')

            return newName
        }

        // customizeName('Gilang')
        // console.log(customizeName('Gilang'))

        // console.log(sayHello("Gilang", toUpperCase))
        // console.log(sayHello("Gilang", toLowerCase))
        // console.log(sayHello("Gilang", customizeName))
        expect(sayHello('Gilang', toUpperCase)).toEqual('Hello, GILANG!')
        expect(sayHello('Gilang', toLowerCase)).toEqual('Hello, gilang!')
        expect(sayHello('Gilang', customizeName)).toEqual('Hello, G><i><l><a><n><g!')
    })
})