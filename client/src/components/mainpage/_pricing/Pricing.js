import React, { Component } from 'react'
import '../../../css/pricing.css'

export default class Pricing extends Component {
  render() {
    return (
      <div className='pricingContainer'>
      <h2 className="price-heading"> Precios </h2>
    <div className="pricing-container">
        <div className="pricing-item">
            <h3 className="pricing-kit">Personal</h3>
            <p className="pricing"><sup>$</sup>15 <sub>/MO</sub> </p>
            <ul className="offers">
                <li>2 websites</li>
                <li>30GB SSD</li>
                <li>1 Domain</li>
                <li>1 Email</li>
                <li>1x CPU & RAM</li>
            </ul>
            <button className="order-btn">order now</button>
        </div>
        <div className="pricing-item">
            <h3 className="pricing-kit">Premium</h3>
            <p className="pricing"><sup>$</sup>30 <sub>/MO</sub> </p>
            <ul className="offers">
                <li>50 websites</li>
                <li>60GB SSD</li>
                <li>5 Domain</li>
                <li>20 Email</li>
                <li>2x CPU & RAM</li>
            </ul>
            <button className="order-btn">order now</button>
        </div>
        <div className="pricing-item">
            <h3 className="pricing-kit">Ultimate</h3>
            <p className="pricing"><sup>$</sup>100 <sub>/MO</sub> </p>
            <ul className="offers">
                <li>100 websites</li>
                <li>200GB SSD</li>
                <li>10 Domain</li>
                <li>10 Email</li>
                <li>2x CPU & RAM</li>
            </ul>
            <button class="order-btn">order now</button>
        </div>
    </div>
      </div>
    )
  }
}
