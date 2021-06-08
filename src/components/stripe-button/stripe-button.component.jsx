import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IzrzgFUb9PPkbDIREyTja4LxDEv6Rwu6KXxoTlLyK7amRPvZI2yE5fPk6S9nyHGJVWjZWbtT6JkSlotJ9lv96Ca00smM6mU7N';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            ammount={priceForStripe}
            panelLabel={`Pay Now $${price}`}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;