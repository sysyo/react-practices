import React, {Component} from 'react';

// component가 class 
export default class TitelBar01 extends Component {
    constructor() {
        // super(p1, p2, p3);
        // super(argument[0], argument[1], argument[2]);
        // arguments 배열 개수 상관없이 분해해서 들어가는 방법!!! 사용하기
        super(...arguments); 


         // no VS state.no 비교

        // this.no = 0;

        // this에 값을 저장하고 싶을 때
        this.state = {
            no: 5
        }
    }

    onClickHandler() {
        // no VS state.no 비교

        // this.no++; // this는 component의 this가 아니라 DOM의 this
        this.setState({
            no: this.state.no + 1
        })

        console.log('TitleBar01 - clicked');
    }

    render() {
        return (
            <h1 
                onClick= { this.onClickHandler.bind(this) } // 전역에서 사용하지 않게 this라고 지정
                style={{cursor: 'pointer'}}> 
                ex03 - Functional Event Handler (Class Component) 
                {
                    // no VS state.no 비교
                    // `no: ${this.no},
                  this.state.no
                  }
            </h1>
        )
    }
}
