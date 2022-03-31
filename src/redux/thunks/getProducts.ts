// import * as productApi from "../../api/productApi";
// import * as productAction from "../actions/productActions";

// export const loadProducts = () => async {
//     return function (dispatch: any) {
//         return productApi.getProducts()
//             .then(products => {
//                 dispatch(productAction.setProducts(products));
//             })
//             .catch(error => {
//                 throw error;
//             });
//     };
// }*/


import { Dispatch } from "redux";
import { SET_PRODUCTS_SUCCESS, ProductsDispatchTypes } from "../actions/productActions";
import axios from "axios";

export const GetProducts = (pokemon: string) => async (dispatch: Dispatch<ProductsDispatchTypes>) => {
    try {
        const res = await axios.get("http://fakestoreapi.com/products");

        dispatch({
            type: SET_PRODUCTS_SUCCESS,
            payload: res.data
        })

    } catch (e) {
        throw e;
    }
};
// ==========================> ZA 1 PRODUKT!!!

// export const GetProducts = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
//     try {
//         dispatch({
//             type: SET_PRODUCTS
//         })

//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

//         dispatch({
//             type: SET_PRODUCTS_SUCCESS,
//             payload: res.data
//         })

//     } catch (e) {
//         dispatch({
//             type: SET_PRODUCTS_FAIL
//         })
//     }
// };