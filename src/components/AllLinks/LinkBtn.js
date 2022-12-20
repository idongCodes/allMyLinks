import styled from "styled-components";

export default function LinkBtn(props) {

    const LinkBtnMain = styled.div`
        background: rgb(0, 140, 255);
        padding: 9px 15px;
        border-radius: 50px;
        margin: 8px 5px;
        opacity: .6;

        &:hover {
            opacity: 1;
        }
    `

    const LinkButton = styled.a`
        color: #fff;
        font-weight: 600;
        text-decoration: none;
    `

    return (
        <LinkBtnMain>
            <LinkButton href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</LinkButton>
        </LinkBtnMain>
    )
}