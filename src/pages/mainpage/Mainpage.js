import React, { Component } from 'react'
import Navbar from '../../components/_navbar/Navbar'
import Footer from '../../components/_footer/Footer'
import Services from '../../components/mainpage/_services/Services'
import Writing from '../../components/mainpage/_writing/Writing'
import Ourteam from '../../components/mainpage/_ourteam/Ourteam'
export class Mainpage extends Component {
  render() {
    return (
 <>

      <Writing/>
      <Services/>
      <Ourteam/>
      <Footer/>
 </>
    )
  }
}

export default Mainpage