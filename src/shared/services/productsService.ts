import { Product } from "../types/product";
import { HttpClient } from "./httpClient";

export class ProductService extends HttpClient {
    public constructor() {
        super("http://localhost:5000");
    }

    public getAll = () => this.instance.get<Product[]>("/products");
}