import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        // arguments 배열 개수 상관없이 분해해서 들어가는 방법!!! 사용하기
        super(...arguments);
        
        this.state = {
            // step: this.props.step, // 변화되지 않는 값이라 state로 굳이 저장안해도 상관 없음
            val: this.props.begin
        }
    }

    onClickButton (e) {
        // this.state.value = this.state.value + this.props.step; -> 값은 변해도 render가 안된다.

        // setState를 사용해서 상태 변화 
        this.setState({
            val: this.state.val + this.props.step
        })
    }

    render() {
        return (
            <div>
                 {/* this를 붙이지 않으면 전역으로 됨 */}
                <button onClick={this.onClickButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
                {' '}
                {/* 과제 : -누르면 내려가도록 */}
                <button>
                    <strong>-</strong>
                </button>
            </div>
        );
    }
}