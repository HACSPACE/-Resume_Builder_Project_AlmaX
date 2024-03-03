import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function TextField(props) {
    const { value: propValue, type, placeholder, elementId, onChange, validation } = props;
    const [value, setValue] = useState(propValue);
    const showErrorMessages = useSelector(state => state.dataStore.showErrorMessages);

    const checkValidation = () => {
        let errorMessage = "";
        if (validation && validation.required && value === "") {
            errorMessage = '*required!';
        } else if (validation && validation.maxLengthRequired && value.length > validation.maxLengthRequired) {
            errorMessage = 'write up to ' + validation.maxLengthRequired + ' characters';
        } else if (validation && validation.checkType && validation.checkType === 'email') {
            if (!(/\S+@\S+\.\S+/.test(value))) {
                errorMessage = "Invalid Email address!";
            }
        }
        return errorMessage;
    };

    let errorMessage = checkValidation();

    useEffect(() => {
        if (validation && validation.required) {
            if (value === "") {
                onChange(value, '*required!');
            }
        }
    }, [value, onChange, validation]);

    useEffect(() => {
        let timerOutId;
        if (value !== propValue && onChange) {
            timerOutId = setTimeout(() => {
                if (validation) {
                    onChange(value, errorMessage);
                } else {
                    onChange(value, "");
                }
            }, 500);
        }
        return () => {
            clearTimeout(timerOutId);
        };
    }, [value, propValue, onChange, errorMessage, validation]);

    return (
        <div className='w-100 h-100 position-relative'>
            <div style={((value !== "" || showErrorMessages === true) && errorMessage !== "") ? { display: 'block', position: 'absolute', bottom: 8, color: "rgb(247, 89, 89)" } : { display: 'none' }}>{errorMessage}</div>
            <input
                className='input-style'
                id={elementId}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
}

export default TextField;
