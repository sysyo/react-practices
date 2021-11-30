import React, { useRef } from 'react';
import './assets/scss/App.scss';

export default function App() {
    const outterRef = useRef(null);
    const innerRef = useRef(null);

    return (
        <div
            ref={outterRef}
            className={'App'}
            onScroll={ e => { console.log(outterRef.current.scrollTop, ':', outterRef.current.clientHeight, ":", innerRef.current.clientHeight) } }>

            <div
                ref={ innerRef }
                >
                <ul>
                    {/* for문 대신에 사용 -  _대신에 e 써도 된다*/}
                    { Array.from({length: 100}, (e, i) => i+1).map(i =>
                        <li key={i}>
                            { `아이템 ${i} 입니다.` }
                        </li>
                    ) }
                </ul>
            </div>
        </div>
    );
}