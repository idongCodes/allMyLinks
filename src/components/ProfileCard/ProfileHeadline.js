import React from 'react';
import styled from 'styled-components';

function ProfileHeadline() {

    const HeadlineMain = styled.div`
        line-height: 1.3rem;
        padding: 0 4%;
        font-size: 1rem;
        text-align: left;
        line-height: 1.5rem;
        letter-spacing: 2px;
        margin: 0 0 30px;

        .label {
          color: rgb(0, 140, 255);
          font-size: 1.1rem;
          font-weight: bold;
        }

        @media screen and (min-width: 600px) {
            width: 520px;
            margin: 30px auto 15px;
            border-radius: 20px;
            padding: 15px;
            font-size: 1rem;
            line-height: 1.5rem;
            text-align: left;
            box-shadow: 5px 5px 5px #ddd;

            &:hover {
                box-shadow: 5px 5px 5px #bbb;
            }
        }
    `

    return (
        <HeadlineMain>
            <p> 
                <br /><span class="label">Name: </span><strong>Idong Essien</strong><br/> <span class="label">Generation: </span>
                <strong>Millenial</strong><br/> <span class="label">Ethnicity: </span> <strong>Ibibio</strong>< br/> <span class="label">Title: </span><strong>Software Developer</strong><br /> <span class="label">Company: </span> <strong>N/A</strong><br /> <span class="label">Dream Job: </span> <strong>Software Engineer, Software Architect, Dev Rel, Product Manager</strong><br /> <span class="label">Relationship Status: </span><strong>Single</strong><br /><br /> Pleased to meet you <span role="img" aria-label="">👋</span>, I'm Idong! A first generation Nigerian-American & non-traditional Software Engineer. My dream is to one day become a Software Architect. I also have a huge interest in Developer Relations and DevOps. A controversial opinion of mine is that pineapples <span role="img" aria-label="">🍍</span> definitely <strong>DO NOT</strong> belong on pizza <span role="img" aria-label="">🍕😬</span>.<br /><br /> <span class="label">Connect with me below!</span>
            </p>
        </HeadlineMain>
    )
}

export default ProfileHeadline;