import React from 'react';

import { CartItemContainer, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { name, price, imageUrl, quantity }}) => (
    <CartItemContainer>
        <img src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>{quantity} X £{price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;