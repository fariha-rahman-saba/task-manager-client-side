import React from 'react';
import './styles/footer.css';

const Footer = () => {
    return (
        <p className='footer w-100 justify-center'>Copyright © {(new Date().getFullYear())}</p>
    );
};

export default Footer;