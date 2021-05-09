import React from 'react';
import './button.css';

const Button = (props) => {

    const onButtonClick = (e) => {
        e.preventDefault();
        
        props.onClick(props.name);
    };    

    return(
        <button className={`btn ${props.name}`} onClick={onButtonClick} >{props.name}</button>
    );
};

export default Button;