import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope } from "react-icons/fa6";

export default function TopBar() {

    const TopBarContainer = styled.div`
        background: rgb(0, 140, 255);
    `

    const TopBarUl = styled.ul`
        margin: 0;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        list-style: none;
    `

    const A = styled.a`
        text-decoration: none;
        color: #fff;
        font-size: 12px;

        &:hover {
            font-weight: bold;
        }
    `

    return (
        <TopBarContainer>
            <TopBarUl>
                <li>
                    <A href="sms:+17743126471?body=Hey%20Idong,%20I%20was%20on%20your%20links%20site.%20Looking%20forward%20to%20speaking%20with%20you%20about%20..."><FaPhone />
</A>
                </li>
                <li>
                    <A href="mailto:idong.essien@comcast.net?subject=RE:%20All%20Your%20Links&body=Does%20this%20work?"><FaEnvelope /></A>
                </li>
            </TopBarUl>
        </TopBarContainer>
    )
}
