import React, { Component } from 'react'

export default class DemoState extends Component {
    /**
     * Chưa đăng nhập: hiển thị button login
     * Đã đăng nhập: hiển thị tên người dùng
     */

    //thuộc tính
    // state thuộc tính có sẵn của React Component
    // giá trị thay đổi khi click => lưu vào state object
    // isLogin = false;// boolean
    state = {
        isLogin: false
    }

    //* Chưa có sự kiện click

    // C2
    renderLogin = () => { 
        console.log(this.isLogin)
        if (this.isLogin){
            //true
           return <span class="alert alert-danger">user001</span>
        }else{
            return <button className='btn btn-success' onClick={this.handleLogin}  >Login</button>
        }
    
    }

    //* Có sự kiện click
    // Click login => đổi giá trị của isLogin false -> true => expected: UI đổi tương ứng theo
    handleLogin = () => { 
        this.isLogin = true
        console.log(this.isLogin)
        // hiển thị lại UI
        // this.render();//! không cho phép render / gọi lại phương thức render()
        //render lại UI thông qua khái niệm State
        //Xác định hàm/ phương thức nào làm đổi state
        // Gán lại gía trị mới cho state => tạo giá trị state mới
        let newState = {
            isLogin: true
        }
        // gán giá trị thông qua setState
        // đổi giá trị cho state, render lại UI
        this.setState(newState)


     }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>

                    {/* C1: xử lý kiểm tra ở trong render() => dùng code đơn giản */}
                    <div id="btnGroup">
                        {this.isLogin ? <span class="alert alert-danger">user001</span> : <button className='btn btn-success'>Login</button>}

                    </div>
                    {/* C2: xử lý kiểm tra ở trong phương thức riêng=> dùng code phức tạp */}
                    <div>
                        {this.renderLogin()}

                    </div>

                </div>
            </nav>

        )
    }



}



// if (isLogin) {

//     document.getElementById("btnGroup").innerHTML = "<span class="alert alert-danger">user001</span>"
// } else {
//     document.getElementById("btnGroup").innerHTML = " <button className='btn btn-success'>Login</button>"
// }

// // toán tử 3
// isLogin ? <span class="alert alert - danger">user001</span> : <button className='btn btn-success'>Login</button>