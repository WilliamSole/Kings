import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckotItem from '../../component/checkout-item/checkout-item.component';
import StripCheckoutButton from '../../component/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const Checkout = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>PRODUCT</span>
            </div>
            <div className='header-block'>
                <span>DESCRIPTION</span>
            </div>
            <div className='header-block'>
                <span>QUANTITY</span>
            </div>
            <div className='header-block'>
                <span>PRICE</span>
            </div>
            <div className='header-block'>
                <span>REMOVE</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckotItem key={cartItem.id} item={cartItem} />
            ))
        }
        <div className='total'>
            <span>TOTAL: £{total}</span>
        </div>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);