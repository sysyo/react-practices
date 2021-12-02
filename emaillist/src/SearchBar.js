import React, { useState } from 'react';
import styles from './assets/scss/SearchBar.scss';

const SearchBar = ({callback}) => {
    const [keyword, setKeyword] = useState('');
    const onInputChanged = (e) => {
        setKeyword(e.target.value); 
        callback(e.target.value)
    };

    return (
        <div>
            <div className = {styles.Searchbar} >
                찾기: <input type='text' placeholder='찾기' value={ keyword } onChange = { onInputChanged } />
            </div>
        </div>
    );
};

export default SearchBar;

// 1. value={ keyword }: 제어컴포넌트 - keyword : 상태
// 2. const [keyword, setKeyword] = useState(''); / import 명시 - import React, { useState } from 'react'; 
// 3. onChange = { (e) => setKeyword(e.target.value) } // 이벤트로 받기
