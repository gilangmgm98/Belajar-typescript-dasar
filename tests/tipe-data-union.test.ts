describe('data type union', () => {
    it('should accept a string or a number or boolean', () => {
        function process(value: string | number | boolean) {
            if (typeof value === 'string') {
                return value.toUpperCase();
            } else if (typeof value === 'number') {
                return value + 3
            } else if (typeof value === 'boolean') {
                return !value
            } else {
                return ('Invalid input');
            }
        }

        expect(process('Muhammad Gilang Murdiyanto')).toBe('MUHAMMAD GILANG MURDIYANTO')
        expect(process(26)).toBe(29)
        expect(process(true)).toBe(false)
        expect(process(10.5)).toBe(13.5)

        //bila menggunakan type data union maka baiknya lakukan pengecekan tiap fungsinya 
    });
})

