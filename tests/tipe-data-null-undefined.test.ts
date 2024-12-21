import { sayHelloName } from "../src/tipe-data-null-undefined"

describe('can fil with undefined and null', () => {
    it('should return true', () => {
        sayHelloName("Gilang")

        const nameUndefined: string | undefined = undefined
        const nameNull: string | null = null
        sayHelloName(nameUndefined)
        sayHelloName(nameNull)

        expect(sayHelloName("Gilang")).toBe(`Hello!, Gilang`)
        expect(sayHelloName(nameUndefined)).toBe('Hello!, Undefined!')
        expect(sayHelloName(nameNull)).toBe('Hello!, NULL!')
    })
})