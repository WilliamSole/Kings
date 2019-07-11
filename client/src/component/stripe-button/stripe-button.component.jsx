import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

// Adds stripe checkout functionality for payment handling
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_N6jzoWOrQ4Ojbb5mNnbzGvin00JWxDDvA9';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then( res => {
            alert('Payment Successful');
        }).catch(err => {
            console.log('Payment Unsuccessful', JSON.parse(err));
            alert('There was an error with your payment. Please make sure you use the provided credit card.')
        })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Kings'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is £${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;