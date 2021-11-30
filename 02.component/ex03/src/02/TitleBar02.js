import React, { useState } from 'react';

// component가 function
export default function TitelBar02() {
    const onClickHandler = () => {
    // const onClickHandler = function() {

        console.log('TitleBar01 clcied');
    }

    return (
        <h1 
            onClick= { onClickHandler }
            style={{cursor: 'pointer'}}> 
            ex03 - Functional Event Handler (Functional Component) 
        </h1>
    )
}