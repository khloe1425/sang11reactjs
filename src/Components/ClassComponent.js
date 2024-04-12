// rcc: react class component
import React, { Component } from 'react'
//OOP: quản lý tốt dự án, nghiêm ngặt, khó sử dụng
export default class ClassComponent extends Component {

    //trả về object jsx lên App component  
    //jsx: đối tượng thẻ (UI) của reactjs
    render() {
        return (
            //!chỉ được phép có 1 thẻ ngoài cùng cho component
            //! chuyển từ html => jsx
            <div className="col-3">
                <div className="card">
                    <img src="https://i.pravatar.cc/?u=80" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        )
    }
}
