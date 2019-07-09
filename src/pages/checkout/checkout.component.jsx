import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckotItem from '../../component/checkout-item/checkout-item.component';
import StripCheckoutButton from '../../component/stripe-button/stripe-button.component';

import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, WarningContainer } from './checkout.styles';

const Checkout = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>PRODUCT</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>DESCRIPTION</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>QUANTITY</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>PRICE</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>REMOVE</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => (
                <CheckotItem key={cartItem.id} item={cartItem} />
            ))
        }
        <TotalContainer>
            <span>TOTAL: £{total}</span>
        </TotalContainer>
        <WarningContainer>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </WarningContainer>
        <StripCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);