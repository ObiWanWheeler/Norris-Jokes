import React from 'react';
import './Quote.css';

const Quote = ({ quote }) => {
    return (
        <div className={"Quote"}>
            <h3 className={'quote-txt'}>{quote}</h3>
        </div>
    )
}

export default Quote;