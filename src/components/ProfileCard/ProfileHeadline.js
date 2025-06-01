import React from 'react';
import styled from 'styled-components';

function ProfileHeadline() {

    const HeadlineMain = styled.div`
        line-height: 1.3rem;
        padding: 0 4%;
        font-size: .8rem;
        text-align: justify;

        @media screen and (min-width: 600px) {
            width: 520px;
            margin: 30px auto 15px;
            border: 1px solid #ddd;
            border-radius: 20px;
            padding: 15px;
            font-size: 1rem;
            line-height: 1.5rem;
            text-align: left;
            box-shadow: 5px 5px 5px #ddd;

            &:hover {
                box-shadow: 5px 5px 5px #bbb;
                border: 1px solid #bbb;
            }
        }
    `

    return (
        <HeadlineMain>
            <p>
                Pleased to meet you 👋, I'm Idong! A first generation Nigerian-American & non-traditional Software Engineer. My dream is to one day become a Software Architect. I also have a huge interest in Developer Relations and DevOps. A controversial opinion of mine is that pineapples 🍍 definitely <strong>DO NOT</strong> belong on pizza 🍕😬. Connect with me below!
            </p>
        </HeadlineMain>
    )
}

export default ProfileHeadline;