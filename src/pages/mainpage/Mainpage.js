import React, { Component } from 'react'
import Footer from '../../components/_footer/Footer'
import Services from '../../components/mainpage/_services/Services'
import Writing from '../../components/mainpage/_writing/Writing'
import Ourteam from '../../components/mainpage/_ourteam/Ourteam'
import Pricing from '../../components/mainpage/_pricing/Pricing.js'
export class Mainpage extends Component {
  render() {
    return (
 <>
      <Writing/>
      <Services/>
      <Pricing/>
      <Ourteam/>
      <Footer/>
 </>
    )
  }
}

export default Mainpage