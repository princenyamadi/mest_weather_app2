import React from 'react';

function Button(props){
    return(
        <button className={props.color} id="button" onClick={props.onClick}  >{props.formButtonName}</button>
    );
}

export default Button;