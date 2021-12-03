import React from 'react';
import GuestbookAddForm from './GuestbookAddForm';
import GuestbookList from './GuestbookList';
import datas from './assets/json/data.json';
import './assets/css/styles.css';

export default function() {
    return (
        <div id='App'>
            <h1>Guestbook</h1>
            <GuestbookAddForm />
            <GuestbookList datas={datas} />
        </div>
    )
}