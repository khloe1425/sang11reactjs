import React, { Component } from 'react'

/**
 * 1 - Xây dựng UI (tạo component, css )
 * 2 - Xác dịnh dữ liêu thay đổi khi user tác đông => lưu vào state
 *      Binding giá trị state lên UI
 * 3 - Xử lý sự kiện setState (button, input, radio) 
 * => đổi giá trị và render lại UI
 */


export default class DemoCar extends Component {

    state = {
        imgURL:"./img/CarBasic/products/black-car.jpg"
    }
    // nfn
    handleColor = (color) =>{
        let newState = {
            imgURL: `./img/CarBasic/products/${color}-car.jpg`
        }
        this.setState(newState)
    }




    render() {
        return (
            <div className='row py-5'>
                <div className="col-8">
                   <img className='img-fluid' src={this.state.imgURL} alt="hinh car" />
                </div>
                <div className="col-4">
                    <ul className="list-group">
                        <li className="list-group-item" onClick={() => {
                            this.handleColor("black")
                        }} 
                        
                        >
                            <div className="row">
                                <div className="col-3">
                                    <img className='img-fluid' src="./img/CarBasic/icons/icon-black.jpg" alt="" />
                                </div>
                                <div className="col-9">
                                    <p>Crystal Black</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item" onClick={() => {
                            this.handleColor("steel")
                        }} >
                            <div className="row">
                                <div className="col-3">
                                    <img className='img-fluid' src="./img/CarBasic/icons/icon-steel.jpg" alt="" />
                                </div>
                                <div className="col-9">
                                    <p>Steel</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item" onClick={() => {
                            this.handleColor("silver")
                        }} >
                            <div className="row">
                                <div className="col-3">
                                    <img className='img-fluid' src="./img/CarBasic/icons/icon-silver.jpg" alt="" />
                                </div>
                                <div className="col-9">
                                    <p>Silver</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item" onClick={()=>{
                            this.handleColor("red")
                        }}  >
                            <div className="row">
                                <div className="col-3">
                                    <img className='img-fluid' src="./img/CarBasic/icons/icon-red.jpg" alt="" />
                                </div>
                                <div className="col-9">
                                    <p>Red</p>
                                </div>
                            </div>
                        </li>
                  
                    </ul>

                </div>
            </div>
        )
    }
}
