import React from 'react';
import styled from 'styled-components';

function Footer() {

    const FooterMain = styled.footer`
    background: #ddd;
    padding: 15px;
    color: #444;
    position: fixed;
    bottom: 0;
    width: 100%;
    `
     
    const currentYear = new Date().getFullYear();

    return (
        <FooterMain>
            <small>&copy; { currentYear } Idong Essien. All rights reserved.</small>
        </FooterMain>
    )
}

export default Footer;