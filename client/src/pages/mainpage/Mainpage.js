import React, { Component } from 'react'
import Footer from '../../components/_footer/Footer'
import Services from '../../components/mainpage/_services/Services'
import Writing from '../../components/mainpage/_writing/Writing'
import Ourteam from '../../components/mainpage/_ourteam/Ourteam'
import Pricing from '../../components/mainpage/_pricing/Pricing.js'
import Navbar from '../../components/_navbar/Navbar'

export class Mainpage extends Component {
  render() {
    return (
 <>
      <Navbar/>
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