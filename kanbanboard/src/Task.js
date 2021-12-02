import React from 'react';

export default function({}) {
    return (
        <div className='TaskList__Task'>
            <input type='checkbox' checked='true' />
                {`ContactList Example`}
                <a href='#' className='TaskList__Task--remove'></a>
        </div>
    )
}