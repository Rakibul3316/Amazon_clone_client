import React from 'react';
import { useStateValue } from '../../Redux/StateProvider';
import './CheckoutProduct.css'
import star from './star.png'


const CheckoutProduct = ({ id, image, title, rating, price }) => {

    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        // remove the item form basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img
                className='checkoutProduct__image'
                src={image}
                alt=""
            />

            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'> {title} </p>
                <p className='checkoutProduct__price'>
                    <span>$</span>
                    <strong> {price} </strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><img src={star} alt="" /></p>
                    ))}
                </div>

                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;