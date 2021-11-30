import React from 'react';

export default function () {
    return (
        <h1
            // onClick={ function(e){console.log('click!') } } // e는 이벤트 객체
            onClick={ (e) => { console.log('click!') } }
            style={{
                cursor: 'pointer'
            }}>
            ex03 - Inline Handler</h1>
    );
}