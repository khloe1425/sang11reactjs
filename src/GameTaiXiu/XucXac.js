import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
  render() {
    console.log(this.props)
    let { mangXucXac } = this.props.gameReducerObj
    return (
      <div className='row'>
        <div className="col-3">
          <button onClick={() => { 
              let action = {
                type:"DAT_CUOC",
                datCuoc: true
              }
              this.props.dispatch(action)

           }} className='game-btn btn btn-primary'>TÀI</button>
        </div>

        <div className="col-6">

          <img className='game-img' src={mangXucXac[0].hinhAnh} alt="" />
          <img className='game-img' src={mangXucXac[1].hinhAnh} alt="" />
          <img className='game-img' src={mangXucXac[2].hinhAnh} alt="" />
        </div>
        
        <div className="col-3">
          <button onClick={() => {
            let action = {
              type: "DAT_CUOC",
              datCuoc: false
            }
            this.props.dispatch(action)

          }} className='game-btn btn btn-primary'>XỈU</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  // return vào props reducer lấy được
  return {
    gameReducerObj: rootReducer.gameReducer
  }
}

const ComponentXucXacRedux = connect(mapStateToProps)(XucXac)

export default ComponentXucXacRedux