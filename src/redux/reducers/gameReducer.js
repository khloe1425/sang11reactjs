//tạo hàm cho game reducer
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

export const gameReducer = (state = gameState, action) => {

    switch (action.type) {
        case "DAT_CUOC":
            console.log(action.datCuoc)
            state.datCuoc = action.datCuoc

            return state
        case "PLAY_GAME":
            // 1 mặt xúc xắc: 1-> 6
            // { hinhAnh: "./img/game/1.png", diem: 1 }
            let mangXucXacMoi = []
            //tạo 3 xúc xắc => for lặp 3 lần
            // random() => return từ 0->  < 1 (float) => * 6 để có kết quả 1-> <6
            // floor =>  lấy phần nguyên trong kết quả random  , + 1 để đạt được kết quả = 6
            for (let i = 0; i < 3; i++) {
                let randomNum = Math.floor(Math.random() * 6) + 1
                // console.log(randomNum)
                let xucXacRandom = {
                    hinhAnh: `./img/game/${randomNum}.png`,
                    diem: randomNum
                }
                mangXucXacMoi.push(xucXacRandom)
            }

            // console.log(mangXucXacMoi)
            state.mangXucXac = mangXucXacMoi

            //TODO tính kết quả
            //tính tổng đỉem xúc xắc => player thắng hoặc thua
            let tongDiem = mangXucXacMoi.reduce((tong, xucxac, index) => {
                return tong += xucxac.diem
            }, 0)
            console.log(tongDiem)
            // TH1: tài && tongDiem > 11 => win
            // TH2: xiu && tongDiem <=11 => win
            if ((state.datCuoc && tongDiem > 11) || (!state.datCuoc && tongDiem <= 11)) {
                //Nếu thắng => soBanThang + 1
                state.soBanThang += 1
                console.log("win")
            } else {
                console.log("thua")
            }

            state.tongSoBanChoi += 1


            return { ...state } //copy object => đổi địa chỉ ô nhớ
        default:
            return state
    }

    // return state;
}


