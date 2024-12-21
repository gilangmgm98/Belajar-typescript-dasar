import { Customer, CustomerType } from "../src/tipe-data-enum"
describe('enum type', () => {
    it('should support in typescript', () => {
        const customer1: Customer = {
            id: 1,
            name: 'John',
            age: 30,
            type: CustomerType.VIP
        }

        const customer2: Customer = {
            id: 2,
            name: 'Gilang',
            age: 26,
            type: CustomerType.PLATINUM
        }

        

        expect(customer1.type).toBe(CustomerType.VIP)
        expect(customer2.type).toBe(CustomerType.PLATINUM)
    })
})