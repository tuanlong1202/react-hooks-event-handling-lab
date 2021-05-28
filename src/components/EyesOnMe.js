// Code EyesOnMe Component Here
import React from "react";

function handleOnFocusEvent() {
    console.log('Good!');
}

function handleOnBlurEvent() {
    console.log('Hey! Eyes on me!');
}

function EyesOnMe() {
    return (
        <button onFocus={handleOnFocusEvent} onBlur={handleOnBlurEvent} >Eyes on me</button>
    );
}

export default EyesOnMe;