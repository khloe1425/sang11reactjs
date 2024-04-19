import React, { Component } from 'react'

export default class ProductInfo extends Component {
  render() {
      let { chiTietSP } = this.props;
    return (
        <div className="row mt-5">
            <div className="col-4">
                {/* this.state.chiTietSP.hinhAnh */}
                <img className='img-fluid' src={chiTietSP.hinhAnh} alt="" />
            </div>
            <div className="col-8">
                <h2>Thông số kỹ thuật</h2>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Màn hình</td>
                            <td>{chiTietSP.manHinh}</td>
                        </tr>
                        <tr>
                            <td>Hệ điều hành</td>
                            <td>{chiTietSP.heDieuHanh}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
  }
}
