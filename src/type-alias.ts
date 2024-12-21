export type ID = string | number;

export type Person = {
    id: ID;
    name: string;
    age: number;
    region?: string;
    isMarried?: boolean;
}

export type Category = {
    id: ID;
    name: string;
}

export type Product = {
    id: ID;
    name: string;
    price: number;
    category: Category;
    customer: Person;
}