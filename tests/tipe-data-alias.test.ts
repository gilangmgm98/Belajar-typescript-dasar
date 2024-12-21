import { Person } from "../src/type-alias"
import { Category } from "../src/type-alias"
import { Product } from "../src/type-alias"

describe('Type Aliases', () => {
    it('should define a custom type alias', () => {
        let person: Person = {
            id: '1',
            name: 'John Doe',
            age: 30,
            region: 'Indonesia',
            isMarried: true
        }

        let category: Category = {
            id: '1',
            name: 'Electronics'
        }
        
        let product: Product = {
            id: '2',
            name: 'Laptop',
            price: 1500000,
            category,
            customer: person
        }

        // product.description = 'Barang Mewah'

        // console.info(person)
        // console.info(category)
        // console.info(product)
        
    })
})