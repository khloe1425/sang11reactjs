// rcc
import React, { Component } from 'react'

export default class DataBinding extends Component {

    //*Thuộc tính
    // sử dụng cho mọi phương thức của class
    img = "https://i.pravatar.cc/?u=80";

    //Phương thức renderCard 
    renderCard() {
        let client = {
            name: "Nguyễn Thị Khách Hàng",
            age: 20,
            avatar: "https://i.pravatar.cc/?u=90"
        }

        //C1: viết thẻ mở chung hàng với return
        return <div className="card">
            <img src={client.avatar} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{client.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    }


    //phương thức render => render UI 
    // { this.img }: binding thuộc tính
    render() {
        //*local scope => chỉ sử dụng cho cho 1 phương thức
        let name = "Nguyễn Văn Khách hàng";

        //C2: sử dụng dấu () => xuống hàng thẻ jsx
        return (
            <div className="col-3">
                {/* <img src={this.img} className="card-img-top" alt="..." />
                <h5 className="card-title">{name}</h5> */}
                {/* gọi phương thức => return UI */}
                {this.renderCard()}
            </div>
        )
    }
}



//Dom thẻ hiển thị nội dung
// let result = "Kết quả";
// document.getElementById("txtNotify").innerHTML = result;
// react => { result }

// tinhDTB(){
//     return 3 + 3+ 3 /3
// }
// document.getElementById("txtNotify").innerHTML = tinhDTB();
// react => { tinhDTB() }

