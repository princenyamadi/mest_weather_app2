import React from 'react';

function InputField(props){
    return(
        <div className="inputField">
            <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} className="input"/>
        </div>
    );
}

export default InputField;