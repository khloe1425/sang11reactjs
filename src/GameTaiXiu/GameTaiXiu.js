import React, { Component } from 'react'
//external css (toàn bộ project đều sử dụng file css)
import "./GameTaiXiu.css"
import XucXac from './XucXac'
import GameResult from './GameResult'
//* import hình theo module (dùng khi lưu ảnh ở folder asset)
// chỉ dùng với ảnh ko đổi hoặc ít đổi (ảnh tĩnh)
// import imgXucXac from "../asset/img/1.png"
// import imgXucXac2 from "../asset/img/2.png"



export default class GameTaiXiu extends Component {
    render() {
        return (
            <div className='game-content'>
                {/* <img src={imgXucXac} alt="hinh xuc xac" /> */}
                <div className="container">
                    <h1>GAME TÀI XỈU</h1>
                    <XucXac />
                    <GameResult />
                </div>

            </div>
        )
    }
}
