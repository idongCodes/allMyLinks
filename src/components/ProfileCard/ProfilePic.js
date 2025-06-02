import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../../assests/profile-img.jpeg';

function ProfilePic() {

    const ImgContainer = styled.div`
        width: 170px;
        height: 170px;
        background-image: url(${ ProfileImg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin: 15px auto 0;
        border-radius: 100%;
        border: 5px solid rgb(0, 140, 255);

        &:hover {
                border: 5px solid rgb(0, 0, 0);
            }
    `
        const MyImg = styled.img`
            display: none;
            width: 250px;
            height: 250px;
        `

    return (
        <ImgContainer>
            <MyImg src={ ProfileImg } alt="illustration of my face" />
        </ImgContainer>
    )
}

export default ProfilePic;