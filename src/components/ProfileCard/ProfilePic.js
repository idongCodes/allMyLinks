import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../../assests/profile-img.jpeg';

function ProfilePic() {

    const ImgContainer = styled.div`
        width: 170px;
        height: 170px;
        border-radius: 150px;
        background-image: url(${ ProfileImg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin: 0 auto;

        @media screen and (min-width: 600px) {
            border: 1px solid #ddd;
            border-radius: 20px;
            width: 550px;
            height: auto;
            background-image: none;
            box-shadow: 5px 5px 5px #ddd;

            &:hover {
                box-shadow: 5px 5px 5px #bbb;
                border: 1px solid #bbb;
            }
        }
    `
        const MyImg = styled.img`
            display: none;
            width: 200px;
            height: 200px;

            @media screen and (min-width: 600px) {
                display: block;
                margin: 0 auto;
            }
        `

    return (
        <ImgContainer>
            <MyImg src={ ProfileImg } alt="illustration of my face" />
        </ImgContainer>
    )
}

export default ProfilePic;