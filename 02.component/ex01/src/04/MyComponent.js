import React, { Fragment } from 'react';
import {PropTypes} from 'prop-types';

export default function MyComponent({props01, props02, props03, props04, props05, props06, props07, props08, props09}){
    return (
        <Fragment >
            <h2>Property Valication</h2>

            <span>props01: {props01 ? props01 : ' ---- Not Set ---' }</span>
            <br />

            <span>props02: {props02 ? props02 : ' ---- Not Set ---' }</span>
            <br />

            <span>props03: {props03 ? `${props03}` : ' ---- Not Set ---' }</span>
            <br />

            {/* Object */}
            <span>props04: {props04 ? props04.no : ' ---- Not Set ---' }</span>
            <br />

            {/* 배열 element, index*/}
            <span>props05: {props05 ? props05.map((e, i) => <b key={i}> {e} </b>) : ' ---- Not Set ---' }</span>
            <br /> 

            {/* 함수 */}
            <span>props06: {props06 ? props06() : ' ---- Not Set ---' }</span>
            <br />

            <span>props07: {props07 ? props07() : ' ---- Not Set ---' }</span>
            <br />

            <span>props08: {props08 ? props08.map((e, i) => e ? <b key={i}> {'true'} </b> : <b key={i}> {'false'} </b>) : ' ---- Not Set ---' }</span>
            <br />

            <span>
                props09: {
                    props09 ? 
                        <div>
                            <h3>{props09.no}</h3>
                            <h3>{props09.name}</h3>
                            <h3>{props09.email}</h3>
                        </div> : 
                        '--- Not Set --- '
                }
            </span>
            <br />
            {/* object가 setting 되어 있으면 div 태그 안의 것(setting 되어있는 props 객체)들이 출력되고, 없으면 Not Set 출력 */}

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
    props06: PropTypes.func.isRequired,

    // Built-In PropTypes Validator(Combined Primitive)
    props07: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    props08: PropTypes.arrayOf(PropTypes.bool).isRequired,
    props09: PropTypes.shape({
        no: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired
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