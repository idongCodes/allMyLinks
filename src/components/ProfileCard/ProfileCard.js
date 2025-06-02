import React from 'react';
import ProfilePic from './ProfilePic.js';
import ProfileHeadline from './ProfileHeadline.js';
import styled from 'styled-components';

function ProfileCard() {

    const ProfileContainer = styled.div`
         padding: 3%;
    `

    return (
        <ProfileContainer>
            <ProfilePic />
            <ProfileHeadline />
        </ProfileContainer>
    )
}

export default ProfileCard;