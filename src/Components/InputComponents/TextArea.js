import React, { useState, useEffect } from 'react';

function TextArea({ value, onChange }) {
    // State to manage the value of the textarea
    const [textValue, setTextValue] = useState(value);

    useEffect(() => {
        // Variable to hold the setTimeout ID
        let timerOutId;

        // useEffect callback to handle debouncing and calling onChange
        if (textValue !== value && onChange) {
            // Setting a timeout to debounce the onChange callback
            timerOutId = setTimeout(() => {
                // Calling the onChange callback with the new value and an empty error message
                onChange(textValue, '');
            }, 500);
        }

        // Cleanup function to clear the timeout if component unmounts or value changes
        return () => {
            clearTimeout(timerOutId);
        };
    }, [textValue, value, onChange]);

    // Event handler to update the textarea value
    const handleChange = (e) => {
        setTextValue(e.target.value);
    };

    return (
        <div className='w-100 h-100 position-relative'>
            <textarea
                className={'input-style'}
                value={textValue}
                onChange={handleChange}
            ></textarea>
        </div>
    );
}

export default TextArea;
