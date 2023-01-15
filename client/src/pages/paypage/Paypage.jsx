import React from 'react'
import ReactPayPal from '../../components/_paypal/Reactpaypal'




export const Paypage = () => {

    const [checkout, setCheckout] = React.useState(false);
  return (
      <div>
    {(checkout === true) 
        ? <div className="payment-div">
          <ReactPayPal />
        </div> 

        :<div>
          <h1>React-PayPal</h1>
          <button onClick={() => {setCheckout(true)}} className="checkout-button">Checkout</button>
        </div>
      }

    </div>
  )
}
