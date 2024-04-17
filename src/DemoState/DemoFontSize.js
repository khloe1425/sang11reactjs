import React, { Component } from 'react'

export default class DemoFontSize extends Component {
    /**
     * + Tạo UI
     * + State
     *  - Xác định biến nào cần lưu vào state (biến có gia trị đổi khi user tác động)
     *      - binding biến đó lên UI
     *  - Sử dụng setState => render lại UI khi giá trị đổi => gọi setSate ở phương thức được chạy khi user tác động
     */

    state = {
        fs: 16
    }
    tangFS = () => {
        let newState = {
            fs: this.state.fs + 2
        }
        this.setState(newState)
    }

     giamFS = () => { 

        //nếu chỉ đổi 1 thuộc tính
        this.setState({
            fs: this.state.fs - 2
        })
    }

    render() {
        let objStyle = {
            fontSize: "16px",
            fontWeight: "bold"
        }
        return (
            <div>
                <h2>Tăng giảm font-size</h2>
                {/* <p style={objStyle} className='alert alert-warning'>Nguyễn Thị Khách Hàng</p> */}
                {/* module css => class component */}
                <p style={{ fontSize: `${this.state.fs}px` }} className='alert alert-warning'>Nguyễn Thị Khách Hàng</p>

                <button className='btn btn-success' onClick={this.tangFS} >+</button>
                <button className='btn btn-danger' >-</button>
            </div>
        )
    }
}


//ES6
// font = 1
// document.getElementById("id").style.fontSize = font + 1




