describe('Object', () => {
    it('should create an object', () => {
        type ID = string | number;
        const person: {
            id: ID;
            name: string;
            age: number;
        } = {
            id: 1,
            name: 'Gilang',
            age: 25
        }

        // console.log(person)
        person.age = 27 // change the age value dynamically
        // console.log(person)
        expect(person).toEqual({
            id: 1,
            name: 'Gilang',
            age: 27
        })
    });
})