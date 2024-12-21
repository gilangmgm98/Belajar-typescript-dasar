describe('any type data', () => {
    it('should return a object', () => {
        const person: any = {
            name: 'Gilang',
            age: 25
        }

        person.age = 27 // change the age value dynamically
        person.region = 'Indonesia'
        person.isMarried = false

        expect(person).toEqual({
            name        : 'Gilang',
            age         : 27,
            region      : 'Indonesia',
            isMarried   : false
        })

        // console.info(person)
        // tidak disarankan menggunakan any terlalu sering / banyak pada typeScript karena apa bedanya dengan JS jadinya
    })
})