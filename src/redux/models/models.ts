import React from "react";

export interface IProduct {
    id: string,
    categotyId: string,
    productInfo: string,
    name: string,
    imageUrl: string,
    price: number,
    quantity: number
}