import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    let [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product] //copyign cart element and adding new product to new cart array
    setCart(newCart);
    }
    const chooseAgain = () => {
        setCart([]);
        console.log('clicked');
        console.log(cart);
    }
    // useEffect(()=>{
    //     cart = [];
    // },[chooseAgain])
    return (
        <div>
            {/* <div className="shop-title">
                <h1>Watches World BD</h1>
                <p>The Best Watch Store</p>
            </div> */}
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart chooseAgain={chooseAgain} cart={cart}></Cart>
                </div>
            </div>
        </div>
    )
}
export default Shop;