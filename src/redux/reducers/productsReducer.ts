// import { ActionTypes } from "../contants/action-types"
// import { IProduct } from "../models/models";

// const initialState = {
//     products: [{
//         id: 1,
//         title: "product",
//         category: "category",
//     }]
// }
// export const productReducer = (state = initialState, { type, payload }: { type: string, payload: IProduct}) => {
//     switch (type) {
//         case ActionTypes.SET_PRODUCTS:
//             return {...state, products: payload};
//         default:
//             return state;
//     }
// };

import {
    SET_PRODUCTS_FAIL,
    SET_PRODUCTS,
    SET_PRODUCTS_SUCCESS,
    ProductsDispatchTypes,
    ProductType
} from "../actions/productActions";

interface DefaultStateI {

    products?: ProductType[]
}

const defaultState: DefaultStateI =
{
    products: [{
        id: "1",
        categotyId: "string",
        productInfo: "string",
        name: "string",
        imageUrl: "string",
        price: 22,
        quantity: 1
    }]
};

const productsReducer = (state: DefaultStateI = defaultState, action: ProductsDispatchTypes): DefaultStateI => {
    switch (action.type) {
        case SET_PRODUCTS_SUCCESS:
            return {
                products: action.payload
            }
        default:
            return state
    }
};

export default productsReducer