import { sayHello } from "../src/say-hello";

describe('sayHello', function (): void {
    it('should return Hello Gilang Gateng', function (): void {
        expect(sayHello('Gilang')).toBe('Hello Gilang Ganteng')
    })
})