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
                <strong>Millenial</strong><br/> <span class="label">Ethnicity: </span> <strong>Ibibio</strong>< br/> <span class="label">Title: </span><strong>Software Developer</strong><br /> <span class="label">Company: </span> <strong>N/A</strong><br /> <span class="label">Dream Job: </span> <strong>Software Engineer, Software Architect, Dev Rel, Product Manager</strong><br /> <span class="label">Relationship Status: </span><strong>Single</strong><br /><br /> Idong <span role="img" aria-label="">👋</span>, short for Idongesit, is a unisex name that originated from the Ibibio and Efik peoples of Southern Nigeria. The name translates to English as "comfourt", but the literal meaning is "healing of heart".<br /><br /> Idong is a first generation Nigerian-American & non-traditional, Freelance, Software Developer with dreams to become a Software Engineer or Architect. Educational experience includes an undergradute technical degree in Web Development, university Computer Science courses and a Full-Stack Software Development technical certification. His professional experience includes remotely coaching folks interested in learning technology and transitioning into technical careers. As well as, remote experience collaborating within cross-functional teams as an Associate Software Developer.<br/><br/>Other interests include manual transmission vehicles, console and mobile gaming, desserts, dogs, horror TV and movies, soccer, savoury foods and he controversially belives pineapples <span role="img" aria-label="">🍍</span> definitely <strong>DO NOT</strong> belong on pizza <span role="img" aria-label="">🍕😬</span>.<br /><br /> <span class="label">Connect with me below!</span>
            </p>
        </HeadlineMain>
    )
}

export default ProfileHeadline;