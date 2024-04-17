import React, { Component } from 'react'

/**
 * 1 - Tạo UI
 * 2 - Binding data
 */




export default class DemoProduct extends Component {

    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]


    renderPhones = () => {
        //duyệt mảng phone: for, map()
        // item: phone, index: vị trí của phần tử mảng phone
        //render UI with map()
        let objPhones = this.arrPhone.map((item, index) => {
            // console.log(item)
            //* return: về 1 mảng mới, chỉ dừng khi duyệt hết mảng
            return <div className="col-4">
                <div className="card">
                    <img src="./img/phone/applephone.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Tên sản phẩm</h5>
                        <p>7000</p>
                        <button className='btn btn-success'>Xem chi tiết</button>
                    </div>
                </div>
            </div>

        })

      return objPhones ; // trả về jsx col-4 để hiển thị lên UI

    }


    
    render() {
        return (
            <div>
                <h2>Danh sách sản phẩm</h2>
                <div className="row">
                    {this.renderPhones()}
                </div>

                <div class="row mt-5">
                    <div className="col-4">
                        <img className='img-fluid' src="./img/phone/applephone.jpg" alt="" />
                    </div>
                    <div className="col-8">
                        <h2>Thông số kỹ thuật</h2>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>HD</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}



/**
 * ES6
 */

// let content = ""; chuỗi các thẻ html col-4
// this.arrPhone.map((item, index) => {
//     content += `
//          <div className="col-4">
//             <div className="card">
//                 <div className="card-body">
//                     <h5 className="card-title">${item.tenSP}</h5>
    
//                 </div>
//             </div>
//         </div>
//     `
// })
// document.getElementById("dssp").innerHTML = content