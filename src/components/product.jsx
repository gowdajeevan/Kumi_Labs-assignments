import React, { useState } from "react";
import { ReactDOM } from "react";

const Product = (x) => {
    // let [state,setState] = useState('+')
let [buttonValue, setButtonValue] = useState('+');
let valueHandler = (e) => {
    if (e.target.value === '+') {
       setButtonValue('-')
    } else {
       setButtonValue('+')
    }
 }
    return ( 
        <div className="list">
            
            <img src={x.image} alt="" />
                <button value={buttonValue} onClick={valueHandler}>{buttonValue}</button>
                <p>{x.price}</p>
                <p>{x.title}</p>
                <p>{x.rating.rate}</p>
                <p>{x.rating.count}</p>
        </div>
    );
}
 
export default Product;