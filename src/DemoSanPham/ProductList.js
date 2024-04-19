import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {


    renderPhones = () => {
        //*return trả mảng mới ra ngoài phương thức renderPhones
        return this.props.arrPhone.map((item, index) => {
            //* return: về 1 mảng mới, chỉ dừng khi duyệt hết mảng
            // let hinhAnh = item.hinhAnh
            let { maSP} = item;
            //obj jsx div => performance : key giống id
            return <div className="col-4" key={`phone${maSP}`}>
                <ProductItem showInfo={this.props.showInfo}   phoneObj={item} />
            </div>

        })

        //   return objPhones ; // trả về jsx col-4 để hiển thị lên UI

    }


    render() {
        console.log(this.props)
    return (
      <div className='row'>
            {/* add nhiều col */}
            {/* <ProductItem tenSanPham="tenSP" phoneObj={this.phoneObj} /> */}
            {this.renderPhones()}
      </div>
    )
  }
}


// ES6
// let myVAR = function(){
// }