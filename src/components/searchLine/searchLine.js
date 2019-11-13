import React from 'react';
import './searchLine.css';

function SearchLine(props) {

    const { value, valueChange } = props;

    return (
        <div className="searchLine">
            <input className="inputText" type="text" value = {value} onChange = {valueChange} placeholder="Search..."/>
        </div>
    );
}

export default SearchLine;