import React from 'react';
import styles from './assets/scss/SearchBar.scss';

const SearchBar = () => {
    return (
        <div>
            <div class = {styles.Searchbar} >
                찾기: <input type='text' placeholder='찾기' />
            </div>
        </div>
    );
};

export default SearchBar;