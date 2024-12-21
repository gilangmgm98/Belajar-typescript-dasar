export enum CustomerType {
    REGULAR = 'REGULAR',
    VIP = 'VIP',
    GOLD = 'GOLD',
    PLATINUM = 'PLATINUM'
}

export type Customer = {
    id: string | number;
    name: string;
    age: number;
    type: CustomerType
}