import React from 'react';

export default function() {
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorial - 특징1 : HTML과 차이점</p>
            {/*
                1. 속성은 Camel Case 
            */}
            <input type='text' maxLength='10' />
            {/*
                2. Element는 꼭 닫혀야 한다.
                오류) <br>, <hr>, <input type='text'>, <img src=''>
            */}
            <br/>
            <hr/>
            <img src='data:image/jpeg;base64,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' />
            {/*
                3. 속성 이름은 DOM API 기반이다.
                <div id='box' class='box'>...</div>
                document.getElementById('box').className = 'box'
            */}
            <div id='box' className='box'>
                box 입니다.
            </div>
        </div>
    )
}