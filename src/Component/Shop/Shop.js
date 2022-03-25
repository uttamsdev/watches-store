import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Watches World BD</h1>
            <p style={{textAlign:'center'}}>The Best Watch Store</p>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product product={product} key={product.id}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h1>Product conatiner</h1>
                </div>
            </div>
        </div>
    )
}
export default Shop;