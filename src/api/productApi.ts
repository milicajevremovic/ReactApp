import { IProduct } from "../redux/models/models";
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/courses/";
import axios from "axios";

export const getProducts = async () => {
    const response = await axios
        .get("http://localhost:9200/products/_search")
        .catch((err) => {
            console.log("Err", err);
        });

    console.log(response);
    return response;
}

/*export function saveProducts(product: IProduct) {
    return fetch(baseUrl + (product.id || ""), {
        method: product.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function deleteProducts(productId: string) {
    return fetch(baseUrl + productId, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}*/
