import React from 'react';

const Footer = (props) =>{
    return (
        <div className="App-footer">
        <p><b>{props.footerBold}</b>, {props.footerSupport}</p>
        </div>
    );
}

export default Footer;