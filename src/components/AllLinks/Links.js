import React from 'react';
import styled from "styled-components";
import { FaGithub, 
         FaLinkedin, 
         FaXTwitter, 
         FaInstagram, 
         FaFacebook, 
         FaThreads, 
         FaSnapchat, 
         FaBluesky, 
         FaMastodon, 
         FaMedium, 
         FaHashnode, 
         FaGlobe, 
         FaSuitcase  } from "react-icons/fa6";


function Links() {

    const LinksMain = styled.div`
        padding: 0 15px;
        display: flex;
        flex-wrap: wrap;

        @media screen and (min-width: 600px) {
            border: 1px solid #ddd;
            border-radius: 20px;
            box-shadow: 5px 5px 5px #ddd;
            width: 520px;
            padding: 15px;
            margin: 0 auto;

            &:hover {
                box-shadow: 5px 5px 5px #bbb;
                border: 1px solid #bbb;
            }
        }
    `

    return (
        <LinksMain>
            <FaGithub />
            <FaLinkedin />
            <FaXTwitter />
            <FaInstagram />
            <FaFacebook />
            <FaThreads />
            <FaSnapchat />
            <FaBluesky />
            <FaMastodon />
            <FaMedium />
            <FaHashnode />
            <FaGlobe />
            <FaSuitcase />
        </LinksMain>
    )
}

export default Links;