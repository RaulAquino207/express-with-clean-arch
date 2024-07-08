import { ProductRepositoryAdapter } from "../../adapters/product-repository.interface";

export class ProductService implements ProductUseCase {
    constructor(private productRepositoryAdapter: ProductRepositoryAdapter) {}

    getProducts(): void {
        const products = this.productRepositoryAdapter.getProducts();
        console.log("🚀 ~ file: product.service.ts:10 ~ ProductService ~ getProducts ~ products:", products)
    }

}