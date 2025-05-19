import React from 'react';
import "../styles/product.css";

function Product({title,image,price,rating}) {
    return (
        <div className="products">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price"><small>$</small><strong>{price}</strong></p>
                <p>{rating}</p>
                <img className="product_image" src={image}></img>
                <button className="addtocart">add to cart</button>
            </div>
        </div>
    )
}

export default Product
