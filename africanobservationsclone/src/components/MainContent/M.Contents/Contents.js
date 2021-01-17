import React from 'react';
import {Button } from 'react-bootstrap';
import './Contents.css';

function Contents({img, quote, close, title, text}) {
    return (
        <div className={close}>
            <div className="img_section">
                <img src={img} className="img" alt={title}/>
            </div>
            <div className="text_section">
                <p>{quote}</p>
                <h2>{title}</h2>
                <p>{text}</p>
                <Button>SHARE</Button>
            </div>
        </div>
    )
}

export default Contents;
