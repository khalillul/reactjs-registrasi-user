import React from 'react';

const Input = (props) => {
	return (  
        <input
            id={props.name}
            name={props.name}
            type={props.inputType}
            value={props.value}
            placeholder={props.placeholder} 
            {...props} />
        )
}

export default Input;