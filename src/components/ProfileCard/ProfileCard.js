import ProfilePic from './ProfilePic.js';
import ProfileHeadline from './ProfileHeadline.js';
import styled from 'styled-components';

function ProfileCard() {

    const ProfileContainer = styled.div`
         padding: 3%;

         @media screen and (min-width: 600px) {
            // background: #ddd;
            padding: 15px;
         }  
    `

    return (
        <ProfileContainer>
            <ProfilePic />
            <ProfileHeadline />
        </ProfileContainer>
    )
}

export default ProfileCard;