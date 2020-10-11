import React from 'react';


function BigFormText(props){
    return(
        <div className="bigFormText">
            <h1 className={props.color}>{props.bigText}</h1>
    <div className="smallText">{props.smallText}</div>
        </div>
    );

}

export default BigFormText;