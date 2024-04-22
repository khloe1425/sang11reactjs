const first = (second) => {
    return "test"
}

// level 1: chỉ có 1 tham số => bỏ dấu tròn của tham số
const func2 = second => {
    return "test"
}

// level 2: bên trong hàm chỉ có 1 lệnh return, chỉ có 1 dùng code => bỏ {}, bỏ từ khóa return
const func3 = second => "test"
