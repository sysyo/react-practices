import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

// console.log(state);
// {
//     order: {
//       no: 1,
//       orderNo: '20210511-000001',
//       description: '청데님외 2건',
//       status: '재고확인중',
//       receive: '서울시 은평구 진관동...',
//       payment: { price: 11000, method: 'Credit Card' },
//       products: [ [Object], [Object], [Object] ]
//     }
//   }

const updateProducts1 = state.order.products;
updateProducts1.push({
    "no": "s002",
    "name": "블루양말",
    "price": "2000",
    "amount": 1
});

console.log(state.order.products, updateProducts1, state.order.products === updateProducts1);
// [
//     { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 1 },
//     { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },    
//     { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 },       
//     { no: 's002', name: '블루양말', price: '2000', amount: 1 }
//   ] [
//     { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 1 },
//     { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
//     { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 },
//     { no: 's002', name: '블루양말', price: '2000', amount: 1 }
//   ] true


console.log("================================================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

// concat 사용해서 새로운 배열 생성
const updateProducts2 = state.order.products.concat({
        "no": "s002",
        "name": "블루양말",
        "price": "2000",
        "amount": 1
});

console.log(state.order.products, updateProducts2, state.order.products === updateProducts2);
// [
//     { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 1 },
//     { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
//     { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 }
//   ] [
//     { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 1 },
//     { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
//     { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 },
//     { no: 's002', name: '블루양말', price: '2000', amount: 1 }
//   ] false

console.log("================================================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

// spread 연산자 사용 ! 추천 !
const updateProducts3 = ([...state.order.products, {
        "no": "s002",
        "name": "블루양말",
        "price": "2000",
        "amount": 1
}]);

console.log(state.order.products, updateProducts3, state.order.products === updateProducts3);
// [
//     { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 1 },
//     { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
//     { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 }
//   ] [
//     { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 1 },
//     { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
//     { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 },
//     { no: 's002', name: '블루양말', price: '2000', amount: 1 }
//   ] false

// npm init -y