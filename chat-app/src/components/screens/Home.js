import React from 'react'
import styled from 'styled-components';
import OnlineFriends from './OnlineFriends';
function home() {
  return (
    <HomeContainer>
        <Wrapper>
            <ControlContainer>
              <LogoContainer>
                  <LogoRound><Logo src={require("../../Assets/images/chat (1).svg").default}
                        alt="Logo" /></LogoRound>
              </LogoContainer>
              <ListControls>
                <ControlItem>
                    <ControlImage className='Leftimagesize' src={require("../../Assets/images/chats.svg").default} alt="chats" />
                </ControlItem>
                <ControlItem>
                    <ControlImage src={require("../../Assets/images/Property 1=phone.svg").default} alt="phoneicon" />
                  </ControlItem>
                <ControlItem>
                    <ControlImage src={require("../../Assets/images/Property 1=video-camera.svg").default} alt="Property 1=video-camera"/>
                </ControlItem>
                <ControlItem>
                  <ControlImage src={require("../../Assets/images/Property 1=users.svg").default} alt="Property 1=users"/>
                </ControlItem>
                <ControlItem>
                  <ControlImage src={require("../../Assets/images/Property 1=setting (1).svg").default} alt="Property 1=setting (1)"/>
                </ControlItem>
              </ListControls>
            <AddContactsContainer>
              <ContactAddButtonContainer>
                <ContactAddButton src={require("../../Assets/images/icons.svg").default} alt="icon"/>
              </ContactAddButtonContainer>
              <ContactIconContainer>
              <ContactIcon src={require("../../Assets/images/01.jpg")} alt="Profile (1)" />
              </ContactIconContainer> 
            </AddContactsContainer>
            </ControlContainer>
            <ProfileContainer>
                <OnlineFriends />
            </ProfileContainer>
        </Wrapper>
    </HomeContainer>
  )
}



const HomeContainer = styled.div`

`;
const Wrapper = styled.div`
display: flex;

`;
const ControlContainer = styled.div`
width:8%;
min-height: 100vh;
height: auto;
background-color: #161B1C;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-top: 44px;
padding-bottom: 88px;
box-sizing: border-box;
`;
const LogoContainer = styled.div`
display: flex;
justify-content: center;
`;

const LogoRound = styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
background-color:#fff;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #48A5C3;
`;
const Logo = styled.img`
width: 60%;
display: block;
`;
const ListControls = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
width: 100%;
padding: 0;
`;

const ControlItem = styled.li`
margin: 0 auto 32px;
&:last-child{
  margin-bottom: 0;
}
`;

const ControlImage = styled.img`
width: 130%;
display: block;
`;

const AddContactsContainer = styled.div`

`;

const ContactAddButtonContainer = styled.div`
width:60px;
height: 60px;
border-radius: 50%;
background-color: #78797B;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto 32px;
`;

const ContactAddButton = styled.img`


`;

const ContactIconContainer = styled.div`
margin: 0 auto;
width:60px;
height: 60px;
border-radius: 50%;
`;

const ContactIcon = styled.img`
width: 100%;
border-radius: 50%;
`;

const ProfileContainer = styled.div`
width: 75%;
min-width: 400px;
min-height: 100vh;
height: auto;
background-color: #161B1C;
border-right: 1px solid #252C2E;
border-left: 1px solid #252C2E;

`;






export default home