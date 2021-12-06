import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = Object.assign({}, state.order, {
    receive: '부산시 해운대구 우동'
});

updateOrder.payment.method = 'Mobile';

console.log(
    state.order,
    updateOrder,
    state.order === updateOrder,                    // false
    state.order.receive === updateOrder.receive,    // false
    state.order.payment === updateOrder.payment);   // true

//     {
//   no: 1,
//   orderNo: '20210511-000001',
//   description: '청데님외 2건',
//   status: '재고확인중',
//   receive: '서울시 은평구 진관동...',
//   payment: { price: 11000, method: 'Mobile' },
//   products: [
//     { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 1 },
//     { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
//     { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 }
//   ]
// } {
//   no: 1,
//   orderNo: '20210511-000001',
//   description: '청데님외 2건',
//   status: '재고확인중',
//   receive: '부산시 해운대구 우동',
//   payment: { price: 11000, method: 'Mobile' },
//   products: [
//     { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 1 },
//     { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
//     { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 }
//   ]
// } false false true



// npm i react-addons-update 설치