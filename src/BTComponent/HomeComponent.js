import React, { Component, Fragment } from 'react'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import NavComponent from './NavComponent'
import ContentComponent from './ContentComponent'

export default class HomeComponent extends Component {
  render() {
    return (
      //!chỉ được phép có 1 thẻ bao bên ngoài =>  dư thừa thẻ div
      //return 1 object div
      // <div className='homeStyle'>
      // </div>

      // không bị dư thừa
      // thẻ cha ảo => giúp đúng cú pháp của react, không sinh ra thẻ trên UI
      <Fragment>
        HomeComponent
        < HeaderComponent />
        <div className="row">
          <div className="col-4">
            <NavComponent />
          </div>
          <div className="col-8">
            <ContentComponent />
          </div>
        </div>
        <FooterComponent />
      </Fragment>
    )
  }
}
// root cause: 
// return obj