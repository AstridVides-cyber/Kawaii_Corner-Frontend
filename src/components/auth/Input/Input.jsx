import React from 'react';

const Input = ({
    label,
    type,
    id,
    placeholder,
    value,
    onchange,
    required = false
}) => {
    return (
        <div className="auth-input-group">
        <label htmlFor={id} className="auth-label">
        {label}
        </label>
        <input
            type={type}
            id={id}
            className="auth-input"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
        />
        </div>
    );
};

export default Input;