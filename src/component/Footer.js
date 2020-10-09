import React from 'react';

const Footer = (props) =>{
    return (
        <div className="App-footer">
        <p><b>{props.footerBold}</b> , <small>{props.footerSupport}</small></p>
        </div>
    );
}

export default Footer;