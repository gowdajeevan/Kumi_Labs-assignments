// data fetch 

// limit -> map product
// Product.jsx (data[i])
import React from "react";
import Product from "./product";

const ProductList = (p) => {
    let v=p.value;
    return <> 
        {v.map(product=><Product x={product}/>)}</>
    ;
}
 
export default ProductList;