import { useState, useEffect } from "react";
import { ProductService } from "../shared/services/productsService";
import { Product } from "../shared/types/product";

export function ProductListPage() {
    let service: ProductService = new ProductService();
    let [productList, setProductList] = useState<Product[] | undefined>();

    useEffect(() => {
        (async () => {
            service.getAll()
                .then((response) => {
                    return response.data;
                })
                .then((data) => {
                    console.table(data);
                    setProductList(data);
                })
                .catch((error) => {
                    console.error(error);
                });
        })();
    }, []);

    return (
        <>
            This is the product lists page
        </>
    );
}