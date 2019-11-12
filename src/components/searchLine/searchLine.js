import React from 'react';

function SearchLine(props) {

    const { value, valueChange } = props;

    return (
        <div>
            <input type="text" value = {value} onChange = {valueChange}/>
        </div>
    );
}

export default SearchLine;