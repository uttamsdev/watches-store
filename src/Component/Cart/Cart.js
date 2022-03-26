import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import './Cart.css'

const Cart = (props) => {
    // console.log(props);
    let {cart} = props;
    const {chooseAgain} = props;
    console.log(cart);

    let name = '';
    for(const product of cart){
        name = product.name;
    }
    

    
    return (
        <div className="cart-items">
            <h2>Selected Watch: </h2>
            {
                cart.map(product => <div className="selected-products" key={product.id}><img src={product.img}></img> {product.name} <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </div>)
                
            }
            <button className="btn">CHOOSE 1 FOR ME</button> <br/>
            <button onClick={chooseAgain} className="btn">CHOOSE AGAIN</button>
        </div>
    )
}
export default Cart;