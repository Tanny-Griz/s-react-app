import React from 'react';

const Input = (props) => {

    const { type, onChange, name, placeholder, value, id } = props;

    return (
        <input 
            type={type}
            id={id}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            value={value}
        />
    )
}

export default Input