import React, { Component } from 'react'
import Navbar from '../../components/_navbar/Navbar'
import Footer from '../../components/_footer/Footer'
import Services from '../../components/_services/Services'
import Writing from '../../components/_writing/Writing'

export class Mainpage extends Component {
  render() {
    return (
 <>

      <Writing/>
      <Services/>
      <Footer/>
 </>
    )
  }
}

export default Mainpage