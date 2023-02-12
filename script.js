'use strict';
const hoten = document.querySelector('#name');
const sdt = document.querySelector('#sdt');
const ngayden = document.querySelector('#ngayden');
const ngaydi = document.querySelector('#ngaydi');
const songuoi = document.querySelector('#songuoi');
const btnSubmit = document.querySelector('#btnSubmit');

btnSubmit.addEventListener('click', function () {
    let next = true;
    if (hoten.value == "") {
        alert("Khong duoc de ho ten trong");
        next = false;
    }
    if (sdt.value == "") {
        alert("Khong duoc de so dien thoai trong");
        next = false;
    }

    //ngay den khong duoc de o qua khu < ngay hien tai
    //lay ngay hien tai
    const ngayhientai = new Date();
    //gia tri trong ngay den la string
    //can chuyen sang Date moi so sanh duoc
    // console.log(typeof ngayden.value);
    let ngayden_v = new Date(ngayden.value);
    if (ngayden_v < ngayhientai) {
        alert("Ngay den khong duoc truoc ngay hien tai");
        next = false;
    }

    let ngaydi_v = new Date(ngaydi.value);
    if (ngaydi_v < ngayden_v) {
        alert("Ngay di khong duoc truoc ngay den");
        next = false;
    }

    //so nguoi phai la so nguyen duong
    //isNaN: khong phai la so tra ve true
    if (isNaN(songuoi.value)) {
        alert("Ban dang nhap khong phai la so");
        next = false;
    }
    else {
        //chuyen sang so
        let num = Number(songuoi.value);
        console.log(num);
        if (!isPositiveNumber(num)) {
            alert("So ban nhap khong la so nguyen duong")
            next = false;
        }
    }

    if (next){
        document.querySelector('#container').innerHTML = "<h1>Cam on ban da dat phong! <br> Chung toi se lien he ban som</h1>";
    }
});

function isPositiveNumber(num) {
    if (Number.isInteger(num) && num > 0)
        return true;
    return false;
}

const [empArr, setEmpArr] = useState([
    {id: 111, name: "Nguyen Van A", username: "nva"},
    {id: 222, name: "Nguyen Tran AB", username: "nbe"},
    {id: 333, name: "Tran Thi XA", username: "ngt"},
]);

const addNewGoalHandler = newGoal => {
    // setEmpArr(empArr.concat(newGoal));
    setEmpArr( prevEmArr => prevEmArr.concat(newGoal));
}