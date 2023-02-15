import { useState,useEffect } from "react";
import { Link } from "react-scroll";
import '../style/ecommerce.css'
// global constant create madu
const Ecommerce = () => {
let [value,setValue] = useState([]);
let [buttonValue, setButtonValue] = useState('+');
let [cart,setCart] = useState(0);
let valueHandler = () => {
    alert('item added to the cart');
    setCart(cart+1);
 }
useEffect(()=>{
    let fetchData=async()=>{
        let responce = await fetch('https://fakestoreapi.com/products');
        let data=await responce.json();
        setValue(data);
    }
    fetchData()
},[])
    return ( 
        <div className="ecommerce">
            <div className="heading">
                <div className="logo">
                    <h1>E-Commerce</h1>
                </div>
                <div  className="cart">
                    <button style={{backgroundColor:"white",borderRadius:"10px",padding:"3px 10px",border:"none"}}><span>&#128722;</span> {cart}</button>
                </div>
            </div>
            <div className="content">
                <div id="poduct1">
                   <div className="name">
                   <h1>Produce <span>&#10148;</span></h1>
                   </div>
                   <div className="product">
                    {value.map(x=>(
                        <div className="list">
                            <img src={x.image} alt="" />
                            <button onClick={valueHandler}>{buttonValue}</button>
                            <p>{x.price}</p>
                            <p>{x.title}</p>
                            <p>{x.rating.rate}</p>
                            <p>{x.rating.count}</p>
                        </div>
                    ))}
                    </div>
                </div>
                <div id="poduct2">
                    <div className="name">
                    <h1>Prepared foods <span>&#10148;</span></h1>
                    </div>
                    <div className="product">
                    {value.map(x=>(
                        <div className="list">
                            <img src={x.image} alt="" />
                            <button onClick={valueHandler}>{buttonValue}</button>
                            <p>{x.price}</p>
                            <p>{x.title}</p>
                            <p>{x.rating.rate}</p>
                            <p>{x.rating.count}</p>
                        </div>
                    ))}
                    </div>
                </div>
                <div id="poduct3">
                    <div className="name">
                        <h1>Canned foods & Soups <span>&#10148;</span></h1>
                    </div>
                    <div className="product">
                    {value.map(x=>(
                        <div className="list">
                            <img src={x.image} alt="" />
                            <button onClick={valueHandler}>{buttonValue}</button>
                            <p>{x.price}</p>
                            <p>{x.title}</p>
                            <p>{x.rating.rate}</p>
                            <p>{x.rating.count}</p>
                        </div>
                    ))}
                    </div>
                </div>
                <div id="poduct4">
                   <div className="name">
                   <h1>Bakery <span>&#10148;</span></h1>
                   </div>
                   <div className="product">
                    {value.map(x=>(
                        <div className="list">
                            <img src={x.image} alt="" />
                            <button onClick={valueHandler}>{buttonValue}</button>
                            <p>{x.price}</p>
                            <p>{x.title}</p>
                            <p>{x.rating.rate}</p>
                            <p>{x.rating.count}</p>
                        </div>
                    ))}
                   </div>
                </div>
                <div id="poduct5">
                    <div className="name">
                    <h1>Diary & Eggs <span>&#10148;</span></h1>
                    </div>
                    <div className="product">
                    {value.map(x=>(
                        <div className="list">
                            <img src={x.image} alt="" />
                            <button onClick={valueHandler}>{buttonValue}</button>
                            <p>{x.price}</p>
                            <p>{x.title}</p>
                            <p>{x.rating.rate}</p>
                            <p>{x.rating.count}</p>
                        </div>
                    ))}
                    </div>
                </div>
                <div id="poduct6">
                    <div className="name">
                        <h1>Frozen <span>&#10148;</span></h1>
                    </div>
                    <div className="product">
                    {value.map(x=>(
                        <div className="list">
                            <img src={x.image} alt="" />
                            <button onClick={valueHandler}>{buttonValue}</button>
                            <p>{x.price}</p>
                            <p>{x.title}</p>
                            <p>{x.rating.rate}</p>
                            <p>{x.rating.count}</p>
                        </div>
                    ))}
                    </div>
                </div>
                <div id="poduct7">
                    <div className="name">
                        <h1>Meat & Seafood <span>&#10148;</span></h1>
                    </div>
                    <div className="product">
                    {value.map(x=>(
                        <div className="list">
                            <img src={x.image} alt="" />
                            <button onClick={valueHandler}>{buttonValue}</button>
                            <p>{x.price}</p>
                            <p>{x.title}</p>
                            <p>{x.rating.rate}</p>
                            <p>{x.rating.count}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className="navbar">
                    <div style={{marginTop:"20px"}} id="produce">
                        <Link activeClass="active" smooth spy  to="poduct1" >Produce</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="prepared_foods">
                        <Link activeClass="active" smooth spy to="poduct2">Prepared foods</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="canned_foods">
                        <Link activeClass="active" smooth spy to="poduct3">Canned foods & Soups</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="bakery">
                        <Link activeClass="active" smooth spy to="poduct4">Bakery</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="diary_eggs">
                        <Link activeClass="active" smooth spy to="poduct5">Diary & Eggs</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="frozen">
                        <Link activeClass="active" smooth spy to="poduct6">Frozen</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="meat_seafood">
                        <Link activeClass="active" smooth spy to="poduct7">Meat & Seafood</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="produce">
                        <Link activeClass="active" smooth spy  to="poduct1" >Produce</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="prepared_foods">
                        <Link activeClass="active" smooth spy to="poduct2">Prepared foods</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="canned_foods">
                        <Link activeClass="active" smooth spy to="poduct3">Canned foods & Soups</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="bakery">
                        <Link activeClass="active" smooth spy to="poduct4">Bakery</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="diary_eggs">
                        <Link activeClass="active" smooth spy to="poduct5">Diary & Eggs</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="frozen">
                        <Link activeClass="active" smooth spy to="poduct6">Frozen</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="meat_seafood">
                        <Link activeClass="active" smooth spy to="poduct7">Meat & Seafood</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="produce">
                        <Link activeClass="active" smooth spy  to="poduct1" >Produce</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="prepared_foods">
                        <Link activeClass="active" smooth spy to="poduct2">Prepared foods</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="canned_foods">
                        <Link activeClass="active" smooth spy to="poduct3">Canned foods & Soups</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="bakery">
                        <Link activeClass="active" smooth spy to="poduct4">Bakery</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="diary_eggs">
                        <Link activeClass="active" smooth spy to="poduct5">Diary & Eggs</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="frozen">
                        <Link activeClass="active" smooth spy to="poduct6">Frozen</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="meat_seafood">
                        <Link activeClass="active" smooth spy to="poduct7">Meat & Seafood</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="produce">
                        <Link activeClass="active" smooth spy  to="poduct1" >Produce</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="prepared_foods">
                        <Link activeClass="active" smooth spy to="poduct2">Prepared foods</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="canned_foods">
                        <Link activeClass="active" smooth spy to="poduct3">Canned foods & Soups</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="bakery">
                        <Link activeClass="active" smooth spy to="poduct4">Bakery</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="diary_eggs">
                        <Link activeClass="active" smooth spy to="poduct5">Diary & Eggs</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="frozen">
                        <Link activeClass="active" smooth spy to="poduct6">Frozen</Link>
                    </div>
                    <div style={{marginTop:"20px"}} id="meat_seafood">
                        <Link activeClass="active" smooth spy to="poduct7">Meat & Seafood</Link>
                    </div>
                </div>
        </div>
     );
}
 
export default Ecommerce;