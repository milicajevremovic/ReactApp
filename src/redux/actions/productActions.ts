/*import { ActionTypes } from "../contants/action-types";
import { IProduct } from "../models/models";
import * as productApi from "../../api/productApi";

export const setProducts = (products: IProduct) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (products: IProduct) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products,
    };
};*/


export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCTS_FAIL = "SET_PRODUCTS_FAIL";
export const SET_PRODUCTS_SUCCESS = "SET_PRODUCTS_SUCCESS";

export type ProductType = {
    id: string,
    categotyId: string,
    productInfo: string,
    name: string,
    imageUrl: string,
    price: number,
    quantity: number
}

export interface SetProductsSuccess {
    type: typeof SET_PRODUCTS_SUCCESS,
    payload: ProductType[]
}

export type ProductsDispatchTypes = SetProductsSuccess


