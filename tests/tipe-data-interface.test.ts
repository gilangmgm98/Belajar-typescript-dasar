import { Seller } from "../src/tipe-data-interface";

describe('Interfaces', () => {
    it('should implement a custom interface', () => {
        const seller: Seller = {
            id: '1',
            name: 'Gilang Murdiyanto',
        }

        console.info(seller)
    })
})