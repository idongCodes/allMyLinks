import styled from 'styled-components';

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
                    <A href="sms:+16173132451?body=Hey%20Idong,%20I%20was%20on%20your%20links%20site.%20Looking%20forward%20to%20speaking%20with%20you%20about%20...">p: +1 (617) 313.2451</A>
                </li>
                <li>
                    <A href="mailto:i.d.essien@gmail.com?subject=RE:%20All%20Your%20Links&body=Does%20this%20work?">e: i.d.essien@gmail.com</A>
                </li>
            </TopBarUl>
        </TopBarContainer>
    )
}
