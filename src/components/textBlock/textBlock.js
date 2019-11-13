import React from 'react';
import './textBlock.css';

function TextBlock(props) {
    const { outputText } = props;
    return (
        <div className="textBlock" dangerouslySetInnerHTML={{__html: outputText}}/>
    );
}

export default TextBlock;