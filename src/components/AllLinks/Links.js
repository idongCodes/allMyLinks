import React from 'react';
import LinkBtn from "./LinkBtn.js";
import styled from "styled-components";

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
            <LinkBtn link="https://github.com/idongcodes" title="Github" />
            <LinkBtn link="https://linkedin.com/in/idongessien" title="LinkedIn" />
            <LinkBtn link="https://twitter.com/idongcodes" title="Twitter" />
            <LinkBtn link="https://instagram.com/idongcodes" title="Instagram" />
            <LinkBtn link="https://facebook.com/idngcodes" title="Facebook" />
            <LinkBtn link="https://polywork.com/idongcodes" title="Polywork" />
            <LinkBtn link="https://medium.com/@idongcodes" title="Medium" />
            <LinkBtn link="https://hashnode.com/@idongcodes" title="Hashnode" />
            <LinkBtn link="https://indieweb.social/@idongessien" title="Mastodon" />
            <LinkBtn link="https://essien.dev/#home" title="Personal Website" />
            <LinkBtn link="https://my.indeed.com/p/richardie-nwyfxmx" title="Resume" />
        </LinksMain>
    )
}

export default Links;