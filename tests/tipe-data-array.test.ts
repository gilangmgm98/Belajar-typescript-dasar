describe('Array', () => {
    it('should same with JS', () => {
        const name: string[] = ['Muhamad', 'Gilang', 'Muridyanto']
        const values: number[] = [1, 2, 3, 4, 5]

        // console.info(name)
        // console.info(values)
        
    });

    it('it should be readOnly array', () => {
        const name: readonly string[] = ['Muhamad', 'Gilang', 'Muridyanto']
        const name2: ReadonlyArray<string> = ['Muhamad', 'Gilang', 'Muridyanto']

        // name2.push('Mahmoud') // Error: Cannot push value to a readonly array
        // name.push('Mahmoud') // Error: Cannot push value to a readonly array
        // hanya bisa membaca array saja tidak bisa merubah 
    });

    it('should be support tupple values', () => {
        const person: [string, number] = ['Gilang', 25]
        // console.info(person)
        // console.info(person[0])
        // console.info(person[1])

        //seperti array dan tipe data dari masing" index juga sudah ditentukan 
    })

})