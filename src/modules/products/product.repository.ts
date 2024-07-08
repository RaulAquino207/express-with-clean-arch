import { ProductEntity } from "../../entities/product.entity";
import { ProductRepositoryAdapter } from "../../adapters/product-repository.interface";

export class ProductRepository implements ProductRepositoryAdapter {
    getProducts(): ProductEntity[] {
        return [
            new ProductEntity({name: "Product 1", price: 100}),
            new ProductEntity({name: "Product 2", price: 150}),
            new ProductEntity({name: "Product 3", price: 200}),
        ];
    }
    
}