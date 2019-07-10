import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveItemContainer } from './checkout-item.styles'

// Shows all the items details and allows the user to increase/decrease quantity as well as remove items from the checkout page component
const CheckoutItem = ({ item, clearItem, removeItem, addItem }) => {
    const { name, quantity, price, imageUrl } = item;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(item)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(item)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer className='price'>£{price}</TextContainer>
            <RemoveItemContainer onClick={() => clearItem(item)}>&#10008;</RemoveItemContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);