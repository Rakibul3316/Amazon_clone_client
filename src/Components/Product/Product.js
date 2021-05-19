import React from 'react';
import './Product.css'
import star from './star.png'

const Product = ({ titel, price, image, rating }) => {
    return (
        <div className='product'>
            <div className="product__info">
                <p className='product__title'>{titel}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong> {price} </strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><img src={star} alt="" /></p>
                    ))}

                </div>
            </div>
            <img src={image} alt="" />

            <button>Add to busket</button>
        </div>
    );
};

export default Product;