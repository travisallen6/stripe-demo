import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'


class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            amount: 53645
         }
    }

    onToken = (token) => {
        token.card = void 0
        axios.post('/api/payment', {token, amount: this.state.amount}).then(res => {
            console.log(res)
        })
    }

    render() { 
        return ( 
           <StripeCheckout
                name="Stripe Demo inc."
                description="Dolla Dolla Bills"
                image="http://via.placeholder.com/100x100"
                token= {this.onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                amount={this.state.amount}
            />
         );
    }
}
 
export default Checkout;