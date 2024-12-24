export interface Employee {
    id: string;
    name: string;
    age?: number;
    division: string;
}

export interface Manager extends Employee {
    numberOfEmployees: number;
    salary: number;
}

export interface SalesPerson extends Employee {
    salesTarget: number;
    commissionRate: number;
}