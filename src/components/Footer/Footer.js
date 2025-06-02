import React from 'react';
import styled from 'styled-components';

function Footer() {

    const FooterMain = styled.footer`
    background: #ddd;
    padding: 15px;
    color: #444;
    flex: 1;
    margin: 30px 0 0;
    `
     
    const currentYear = new Date().getFullYear();

    return (
        <FooterMain>
            <small>&copy; { currentYear } Idong Essien. All rights reserved.</small>
        </FooterMain>
    )
}

export default Footer;