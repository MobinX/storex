import { groq } from "next-sanity";

export const productList = groq`
    *[_type=="product"]{
    title,
    "price":defaultProductVariant.price,
    "images":defaultProductVariant.images
}`;
