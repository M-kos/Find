import React from 'react';

function TextBlock(props) {
    const { outputText } = props;
    return (
        <div dangerouslySetInnerHTML={{__html: outputText}}/>
    );
}

export default TextBlock;