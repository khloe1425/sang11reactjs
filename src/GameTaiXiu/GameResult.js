import React, { Component } from 'react'
import { connect } from 'react-redux'

class GameResult extends Component {
    render() {
        console.log(this.props)
        let {datCuoc,soBanThang,tongSoBanChoi} = this.props.gameReducerObj
        return (
            <div className='game-result'>
                <p>BẠN CHỌN:  <span className='text-danger'>{datCuoc==true ? "TÀI": "XỈU"}</span></p>
                <p>SỐ BÀN THẮNG:  <span className='text-success'>{soBanThang}</span></p>
                <p>TỔNG SỐ BÀN CHƠI:  <span className='text-primary'>{tongSoBanChoi}</span></p>
                <button onClick={() => { 
                    let action ={
                        type:"PLAY_GAME"
                    }
                    this.props.dispatch(action)

                 }} className='btn btn-success'>PLAY GAME</button>
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
export default connect(mapStateToProps)(GameResult)

