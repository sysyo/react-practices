import React from 'react';
import './assets/Form.css';

export default function Form() {
// 개별적인 validation이 필요하지 않을 때 사용 
// 비제어로도 작성이 가능하다.    

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.email.value, ':', e.target.password.value); // email -> name

        // ajax 로그인
    }

    return (
        <form
            id="loginForm"
            name="loginForm"
            method="post"
            action="/do/not/post"
            onSubmit= { onSubmit }
            >
            <label htmlFor="email">이메일</label>
            <input
                id="email"
                name="email"
                type="text" />

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" />

            <input type="submit" value="로그인" />
        </form>
    );
}