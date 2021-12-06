import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder1 = state.order;
updateOrder1.receive = '부산시 해운대구 우동 ...';
// setState({
//     // order: updateOrder1 -> 이렇게 하지 말기
// })

console.log(state.order, updateOrder1, state.order === updateOrder1);
// -> 불변성 위배 => 바뀜
// {
//     no: 1,
//     orderNo: '20210511-000001',
//     description: '청데님외 2건',
//     status: '재고확인중',
//     receive: '부산시 해운대구 우동 ...',
//     payment: { price: 11000, method: 'Credit Card' },
//     products: [
//       { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 1 },
//       { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
//       { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 }
//     ]
//   } {
//     no: 1,
//     orderNo: '20210511-000001',
//     description: '청데님외 2건',
//     status: '재고확인중',
//     receive: '부산시 해운대구 우동 ...',
//     payment: { price: 11000, method: 'Credit Card' },
//     products: [
//       { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 1 },
//       { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
//       { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 }
//     ]
//   } true

console.log("==========================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder2 = Object.assign({}, state.order, {
    receive: '부산시 해운대구 우동 ...'
})

console.log(state.order, updateOrder2, state.order === updateOrder2);
// => 기존꺼 안바뀜 (불변), 새로운 객체 생성
// {
//     no: 1,
//     orderNo: '20210511-000001',
//     description: '청데님외 2건',
//     status: '재고확인중',
//     receive: '서울시 은평구 진관동...',
//     payment: { price: 11000, method: 'Credit Card' },
//     products: [
//       { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 1 },
//       { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
//       { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 }
//     ]
//   } {
//     no: 1,
//     orderNo: '20210511-000001',
//     description: '청데님외 2건',
//     status: '재고확인중',
//     receive: '부산시 해운대구 우동 ...',
//     payment: { price: 11000, method: 'Credit Card' },
//     products: [
//       { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 1 },
//       { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
//       { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 }
//     ]
//   } false

// assign 문제 -> Deep Copy가 안된다.