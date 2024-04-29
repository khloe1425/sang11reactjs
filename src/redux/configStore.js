// store lưu trữ chung các giá trị cần truyền giữa các component
// createStore: sử dụng cho class component
import { combineReducers, createStore } from "redux";

//xác định kiểu dữ liệu của state
//dữ liệu nào cần lưu vào state

//*B1: khai báo giá trị ban đầu cho state
const gioHang = []

//* dữ liệu cần lưu:
// mảng đối tượng xuc xac: [ {hinhAnh:"./img/game/1.png", diem:1 } ]
// datCuoc: true (tài), false (xỉu)
// soBanThang: 0, tongSoBanChoi: 0
const gameState = {
    mangXucXac: [
        { hinhAnh: "./img/game/1.png", diem: 1 },
        { hinhAnh: "./img/game/1.png", diem: 1 },
        { hinhAnh: "./img/game/1.png", diem: 1 }
    ],
    datCuoc: true,
    soBanThang: 0,
    tongSoBanChoi: 0
}

const rootReducer = combineReducers({
    //reducers: các state sẽ được lưu ở đây
    //*B2: Tạo reducer, phương thức chứa state (nhận vào tham số state) 
    gioHangReducer: (state = gioHang, action) => {
        console.log(action)
        switch (action.type) {
            case "THEM_GIO_HANG":
                //* tạo đối tượng riêng cho giỏ hàng
                let { maSP, tenSP, giaBan, hinhAnh } = action.phone;
                let cartItem = { maSP: maSP, tenSP: tenSP, giaBan: giaBan, hinhAnh: hinhAnh, soLuong: 1 }

                //copy mảng sang mảng mơi
                let gioHangUpdate = [...state]
                let cartFind = gioHangUpdate.find(cartItem => cartItem.maSP === maSP)
                if (cartFind) {
                    cartFind.soLuong += 1;
                } else {

                    gioHangUpdate.push(cartItem);
                }
                // return state;// giỏ hàng ban đầu
                // tính bất biến => tham chiếu
                // => phải trả về biến mới => địa chỉ ô nhớ => redux mới nhận biết thay đổi => render lại UI
                return gioHangUpdate; //trả về giỏ hàng mới

            case "XOA_GIO_HANG":

                let gioHangMoi = state.filter(cartItem => cartItem.maSP !== action.maSPXoa)

                return gioHangMoi
            case "TANG_GIAM":
                let gioHangUpdateSL = [...state]

                let findItem = gioHangUpdateSL.find((cartItem) => {
                    return cartItem.maSP === action.maSPClick
                })

                if (findItem) {
                    //tìm thấy
                    findItem.soLuong += action.sl
                    if (findItem.soLuong < 1) {
                        alert("Số lượng không được dưới 1")
                        findItem.soLuong -= action.sl
                    }
                }

                return gioHangUpdateSL

            default:
                return state;
        }

        // trả về state
        // return state;// gioHang
    },
    gameReducer: (state = gameState, action) => {
        return state;
    }

    //mỗi reducer giống 1 tính năng của ứng dụng
    // xemChiTietReducer: ()=>{
    // }

})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// class MyClass{
//     first = () => { 
//      }
// }
// const rootReducer = {
//     gioHangReducer: function(){
//     }
// }