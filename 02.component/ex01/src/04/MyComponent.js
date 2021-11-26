import React, { Fragment } from 'react';
import {PropTypes} from 'prop-types';

export default function MyComponent({props01, props02, props03, props04, props05, props06}){
    return (
        <Fragment >
            <h2>Property Valication</h2>

            <span>props01: {props01 ? props01 : ' ---- NOT Set ---' }</span>
            <br />

            <span>props02: {props02 ? props02 : ' ---- NOT Set ---' }</span>
            <br />

            <span>props03: {props03 ? `${props03}` : ' ---- NOT Set ---' }</span>
            <br />

            {/* Object */}
            <span>props04: {props04 ? props04.no : ' ---- NOT Set ---' }</span>
            <br />

            {/* 배열 element, index*/}
            <span>props05: {props05 ? props05.map((e, i)=><b key={i}> {e} </b>) : ' ---- NOT Set ---' }</span>
            <br /> 

            {/* 함수 */}
            <span>props06: {props06 ? props06() : ' ---- NOT Set ---' }</span>
            <br />

        </Fragment>
    )
}

MyComponent.propTypes = {

    // Built-In ProTypes Validator primitive(원시 타입)
    props01: PropTypes.string,
    props02: PropTypes.number.isRequired,
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired
}

// default value
MyComponent.defaultProps = {
    props01: '기본값',
    props02: 10,
    props03: false, // false 면   ---- NOT Set ---이 출력
    props04: {}, // null로 주면 error
    props05: [],
    props06: () => {} // dummy 함수 (깡통, 파라미터 없고 아무 일도 없는 함수)
}