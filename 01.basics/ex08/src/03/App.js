import React, { Fragment } from 'react'; // Fragment : 개별적으로 받을 때, 특별한 elements를 사용하고 싶지 않을 때

import Header from './Header';
import Content from './Content';


export default function() {
    return (
        <Fragment>
            <Header />
            <Content />            
        </Fragment>
    )
}