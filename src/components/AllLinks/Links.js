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
            <a href="https://github.com/idongCodes" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/idongcodes/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>

            <a href="https://x.com/idongCodes" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
            </a>

            <a href="https://www.instagram.com/idongcodes/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>

            <a href="https://www.facebook.com/idngcodes/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
            </a>

            <a href="https://www.threads.com/@idongcodes" target="_blank" rel="noopener noreferrer">
                <FaThreads />
            </a>
            
            <a href="https://snapchat.com/t/UkBcH8Ro" target="_blank" rel="noopener noreferrer">
                <FaSnapchat />
            </a>
            
            <a href="https://bsky.app/profile/idongcodes.bsky.social" target="_blank" rel="noopener noreferrer">
                <FaBluesky />
            </a>
            
            <a href="https://indieweb.social/@idongcodes" target="_blank" rel="noopener noreferrer">
                <FaMastodon />
            </a>
            
            <a href="https://medium.com/@idongcodes" target="_blank" rel="noopener noreferrer">
                <FaMedium />
            </a>
            
            <a href="https://hashnode.com/@idongCodes" target="_blank" rel="noopener noreferrer">
                <FaHashnode />
            </a>
            
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGlobe />
            </a>
            
            <a href="https://profile.indeed.com/p/richarde-nr373s7" target="_blank" rel="noopener noreferrer">
                <FaSuitcase />
            </a>
        </LinksMain>
    )
}

export default Links;