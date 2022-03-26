import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import './Cart.css'

const Cart = (props) => {
    // console.log(props);
    const {cart} = props;
    console.log(cart);

    let name = '';
    for(const product of cart){
        name = product.name;
    }
    return (
        <div>
            <h2>Selected Watch: </h2>
            {
                cart.map(product => <div className="selected-products" key={product.id}><img src={product.img}></img> {product.name} <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </div>)
            }
        </div>
    )
}
export default Cart;