import fs from 'fs';
import update from 'react-addons-update';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = update(state.order, {
    // 해당 패스의 값 변경 1
    receive: {
        $set: '부산시 해운대구 우동'
    },
    // 해당 패스의 값 변경 2
    payment: {
        method: {
            $set: 'Mobile'
        }
    }, 
    // 배열 요소 변경 (인덱스로 찾아서) - set
    products: {
        0: {
            amount: {
                $set: 5
            }
        }
    }
});

updateOrder.payment.method = 'Mobile';

console.log(
    state.order,
    updateOrder,
    state.order === updateOrder,                    // false
    state.order.receive === updateOrder.receive,    // false
    state.order.payment === updateOrder.payment,    // false 
    state.order.products === updateOrder.products);   // false

    // =>불변성 유지 
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
    //     receive: '부산시 해운대구 우동',
    //     payment: { price: 11000, method: 'Mobile' },
    //     products: [
    //       { no: 'p002-001', name: '팬츠 스트라이프', price: 2000, amount: 5 },
    //       { no: 't002-001', name: '화이티 면티', price: 1000, amount: 1 },
    //       { no: 'c002-002', name: '야구모자', price: 4000, amount: 2 }
    //     ]
    //   } false false false false