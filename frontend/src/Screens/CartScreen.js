import React from 'react';
import {Link} from "react-router-dom";

function CartScreen(props){
    return <div className="cartscreen-emty">
        <div className="cart-icon">
        <i class="fas fa-shopping-cart"></i>
        </div>
        <div>Giỏ hàng của bạn đang trống</div>
    </div>
}

export default CartScreen;