import styled from 'styled-components';
import ProfileImg from '/home/idong/Desktop/my-linktree/src/assests/profile-img.jpeg';

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
    `

    return (
        <ImgContainer>
        </ImgContainer>
    )
}

export default ProfilePic;