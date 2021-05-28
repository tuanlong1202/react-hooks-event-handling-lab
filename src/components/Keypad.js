// Code Keypad Component Here
import React from "react";

function handleOnChangeEvent() {
    console.log('Entering password...');
}

function Keypad () {
    return (
        <input type="password" onChange={handleOnChangeEvent} />
    );
}

export default Keypad;