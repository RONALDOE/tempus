
import Navbar from '../../components/_navbar/Navbar'
import Footer from '../../components/_footer/Footer'
import Services from '../../components/_services/Services'
import Writing from '../../components/_writing/Writing'



import React, { Component } from 'react'

export class Mainpage extends Component {
  render() {
    return (
      <React.StrictMode>
      <Navbar/>
      <Writing/>
      <Services/>
      <Footer/>
    </React.StrictMode>
    )
  }
}

export default Mainpage