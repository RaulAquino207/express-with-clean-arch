import { Replace } from "../helpers/Replace";

export interface ProductProps {
    id: string;
    name: string;
    price: number;
}

export class ProductEntity {
    private productProps: ProductProps;

    constructor(productProps: Replace<ProductProps, { id?: string }>) {
        this.productProps = {
            ...productProps,
            id: null,
        };
    }

    get id(): string {
        return this.productProps.id;
    }

    get name(): string {
        return this.productProps.name;
    }

    set name(value: string) {
        this.productProps.name = value;
    }

    get price(): number {
        return this.productProps.price;
    }

    set price(value: number) {
        this.productProps.price = value;
    }
}