import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import './Cart.css'

const Cart = (props) => {
    // console.log(props);
    let {cart} = props;
    const {chooseAgain} = props;
    const {chooseOne} = props;
    // console.log(name);
    // console.log(props.number);
    const {random} = props;
    // console.log(number);
    // console.log(name);
    // console.log(chooseOne);
    // console.log(cart);

    //dekte hbe uncomment 
    // let name = '';
    // for(const product of cart){
    //     name = product.name;
    // }


    
    return (
        <div className="cart-items">
            <h2>Selected Watch: </h2>
            <hr />
            {
                cart.map(product => <div className="selected-products" key={product.id}><img src={product.img}></img> {product.name} <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </div>)
                
            }
            <button onClick={chooseOne} className="btn">CHOOSE 1 FOR ME</button> <br/>
            <button onClick={chooseAgain} className="btn">CHOOSE AGAIN</button>
            <h3>Randomly selected: </h3>
            <hr />
            <div className="random-items">
                <img src={random.img}></img>
                <h4>{random.name}</h4>
            </div>
        </div>
    )
}
export default Cart;