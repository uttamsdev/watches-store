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
            {/* <div className="shop-title">
                <h1>Watches World BD</h1>
                <p>The Best Watch Store</p>
            </div> */}
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product product={product} key={product.id}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h2>Selected Watch</h2>
                </div>
            </div>
        </div>
    )
}
export default Shop;