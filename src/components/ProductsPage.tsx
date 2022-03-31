import { useDispatch, useSelector } from "react-redux";
import * as getProducts from "../redux/thunks/getProducts";
import ProductComponent from "./ProductComponent";
import { AppState } from "../redux/reducers";
import React, { useEffect, useCallback, useMemo } from "react";

const ProductPage = () => {
    const products = useSelector((state: AppState) => state.allProducts.products);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(getProducts.GetProducts);
    }, []);
    console.log("Products :", products);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};

export default ProductPage;


// import React from "react";
// import ProductComponent from "./ProductComponent";
// import { connect } from "react-redux";


// export const ProductsPage = (props: ReturnType<typeof mapStateToProps>) => {
//     console.log(props.products);
//     return (
//         <div className="ui grid container">
//             <ProductComponent />

//         </div>
//     );
// };

// const mapStateToProps = (state: AppState) => (
//     {
//         products: state.allProducts,
//     }
// )

// export default connect<
//     ReturnType<typeof mapStateToProps>,
//     undefined, undefined, AppState
// >
//     (mapStateToProps, undefined)(ProductsPage);


