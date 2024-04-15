import React, { Component, Fragment } from 'react'

export default class HandleEvent extends Component {



    // nfn : arrow function
    // không có tham số
    testEventClick = () => {
        alert("Click rồi nè")
    }
    // có tham số
    //Khởi tạo phương thức
    showInfo = (name) => {
        //truyền biến vào chuỗi string
        alert(`Tên khách hàng: ${name}`)
    }


    //không cho phép render lại UI => chỉ render lại thông state
    render() {
        let nameClient = "Nguyễn Thị Khách Hàng"
        return (
            // <Fragment>
            // {}: đưa biến vào jsx
            <div className="col-3">

                <button className='btn btn-danger' onClick={this.testEventClick}  >Click</button>
                {/* () => chạy khi load  */}
                {/* <button className='btn btn-danger' onClick={this.showInfo(nameClient)} >Click Me</button> */}
                {/* anfn: hàm ẩn danh arrow function */}
                <button className='btn btn-danger' onClick={(event) => {
                    //event (e, evt): tham số sự kiện , có sẵn của thẻ UI
                    //event.target : xác định thẻ nào đc click (được user tác động) mà không cần xử lý với dom
                    console.log(event.target)
                    event.target.style.backgroundColor = "green"

                    this.showInfo(nameClient)

                }} >Click Me</button>

                {/* Khi click button => render card */}
                {/* <button className='btn btn-success'>Render Card</button> */}
                {/* vị trí UI card */}

            </div>
            // </Fragment>
        )
    }
}

//Class ES6
// phương thức : function, arrow function (hạn chế => sai ngữ cảnh của this)
// this không nhận diện được class đang sử dụng => không truy xuất được thuộc tính và phương thức
// Reactjs => có thể sử dụng arrow function cho phương thức


//Event:
/**
 * JS
 */
// C1:
// document.getElementById("IDButton").onclick = testEventClick;
// C2
// <button onclick="testEventClick()">CLick</button>


// chạy khi load
// document.getElementById("IDButton").onclick = showInfo(nameClient);
// hàm ẩn danh
// document.getElementById("IDButton").onclick = function(){
//*     //khi click chạy code trong hàm ẩn danh
//     showInfo(nameClient);
// };