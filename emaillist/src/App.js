import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

import './assets/scss/App.scss';
import data from './assets/json/data.json';

export default function () {
    const [keyword, setKeyword] = useState('');

    const notifyKeywordChanged = (keyword) => {
        console.log(keyword); // 자식이 부모 호출
        setKeyword(keyword); // 다시 상태값 변화
    }
        return (
        <div className={'App'}>
            <RegisterForm />
            <SearchBar callback = { notifyKeywordChanged } /> 
            <Emaillist keyword={ keyword }  emails = { data } />
        </div>
    )
}

// callback - 자식이 부모에게 전달하는 용도로 사용하는 프로퍼티 (임시지정이름)
