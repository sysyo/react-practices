import React from 'react';
import GuestbookAddForm from 'GuestbookAddForm';
import GuestbookList from 'GuestbookList';

export default function() {
    return (
        <div id='App'>
            <h1>Guestbook</h1>
            <GuestbookAddForm />
            <GuestbookList />
        </div>
    )
}