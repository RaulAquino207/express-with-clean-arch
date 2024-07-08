import { ProductEntity } from "../entities/product.entity";

export interface ProductRepositoryAdapter {
    getProducts(): ProductEntity[];
}