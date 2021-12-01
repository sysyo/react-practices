import React, {useState} from 'react'; // react 패키지에서 useState 함수를 불러온다.

export default function ({ begin, step }) { // 함수형 컴포넌트
    const [stateVal, setVal] = useState(begin); // useState 함수를 호출하면 배열을 반환
    // stateVal - 현재 상태 값 변수 / setVal은 상태값을 갱신해주는 Setter 함수
    // useState 괄호 안의 값은 상태의 초기값
    // const [stateStep] = useState(step); - 코드 중복

    return (
        <div>
            <button onClick={(e) => {
                setVal(stateVal + step);
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ stateVal }</span>
            {' '}
            {/* 과제 : -누르면 내려가도록 */}
            <button>
                    <strong>-</strong>
            </button>
        </div>
    );
}