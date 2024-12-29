describe('loop', () => {
    it('should support loop let i', () => {
        let count = 0;
        for (let i = 0; i < 5; i++) {
            console.log(i)
            count++;
        }

        expect(count).toBe(5)
    })

    it('should support loop for of', () => {
        const numbers = [1, 2, 3, 4, 5]
        let count = 0;
        for (let number of numbers) {
            // console.log(number)
            count++;
        }
        
        expect(count).toBe(5)

        let persons = ['Gilang', 'Naufal', 'Rieza', 'Kevin']
        let all :string = '' 
        for (let name of persons) {
            if(name === 'Kevin') {
                all += `${name}`
            }else{
                all += `${name}, `
            }
        }
        
        expect(all).toBe('Gilang, Naufal, Rieza, Kevin')
    })

    it('should support loop for in', () => {
        const person = {
            name: 'Gilang',
            age: 26
        }
        
        let count = 0;
        for (let key in person) {
            // console.log(key, person[key])
            count++;
        }
        
        expect(count).toBe(2)
        
        let cars = ['Toyota', 'Honda', 'BMW']
        let all :string = ''
        for (let car of cars) {
            if(car === 'BMW') {
                all += `${car}`
            }else{
                all += `${car}, `
            }
        }
        
        expect(all).toBe('Toyota, Honda, BMW')
    })

    it('should support while loops', () => {
        let i = 0;
        let count = 0;
        while (i < 5) {
            console.log(i)
            i++;
            count++;
        }
        
        expect(count).toBe(5)
        expect(i).toBe(5)
    })

    it('should support do while loops', () => {
        let i = 0;
        let count = 0;
        do {
            console.log(i)
            i++;
            count++;
        } while (i < 5)
        
        expect(count).toBe(5)
        expect(i).toBe(5)
    })

    it('should support break statement', () => {
        let numbers = [1, 2, 3, 4, 5]
        let count = 0;
        for (let number of numbers) {
            if(number === 3) {
                break;
            }
            count++;
        }
        
        expect(count).toBe(2)
    })

    it('should support continue statement', () => {
        let numbers = [1, 2, 3, 4, 5]
        let count = 0;
        for (let number of numbers) {
            if(number === 3 || number === 4) {
                continue;
            }
            count++;
        }
        
        expect(count).toBe(3)
    })

    // it('should support labelled statement', () => {
    //     let numbers = [1, 2, 3, 4, 5]
    //     let count = 0;
    //     outer:
    //     for (let number of numbers) {
    //         for (let i = 0; i < number; i++) {
    //             if(i === 2) {
    //                 continue outer;
    //             }
    //             count++;
    //         }
    //     }
        
    //     expect(count).toBe(4)
    // })
})