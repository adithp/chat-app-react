import React from 'react'
import styled from 'styled-components';
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
                <MyProfileContainer>
                    <ProfileImageContainer>
                        <ProfileImage src={require("../../Assets/images/01.jpg")} alt="Profile (1)" />
                    </ProfileImageContainer>
                    <NameContainer>
                        <ProfileHeadeing>Bujange bapak</ProfileHeadeing>
                        <SpanAccount>My Account</SpanAccount>
                    </NameContainer>
                    <RoundIconContainerDots>
                        <Dots src={require("../../Assets/images/Option.svg").default} alt="dots" />
                    </RoundIconContainerDots>
                </MyProfileContainer>
                <Onlinecontainer>
                    <SearchContainer></SearchContainer>
                    <OnlineFriends></OnlineFriends>
                </Onlinecontainer>
                <ContactsListSection></ContactsListSection>
            </ProfileContainer>
            <MainContainer></MainContainer>
            <ProfileDetailsContainer></ProfileDetailsContainer>
        </Wrapper>
    </HomeContainer>
  )
}



const HomeContainer = styled.div`
height: 100vh;
`;
const Wrapper = styled.div`
display: flex;

`;
const ControlContainer = styled.div`
width:8%;
height: 100vh;
background-color: #161B1C;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-top: 44px;
padding-bottom: 88px;
box-sizing: border-box;
`;
const MainContainer = styled.div`
width: 46%;
height:100vh;

`;
const ProfileDetailsContainer = styled.div`
height:100vh;
width: 22%;
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
width: 24%;
min-width: 400px;
height:100vh;
background-color: #161B1C;
border-right: 1px solid #252C2E;
border-left: 1px solid #252C2E;

`;
const MyProfileContainer = styled.div`
height: 15%;
display: flex;
padding:32px;
border-bottom: 1px solid #252C2E;
box-sizing: border-box;
`;

const ProfileImageContainer = styled.div`
width: 20%;
border-radius: 50%;
margin-right: 16px;

`;

const ProfileImage = styled.img`
width: 100%;
border-radius: 50%;
`;

const NameContainer = styled.div`

`;

const ProfileHeadeing = styled.h2`
color: #fff;
font-weight: 500;
margin:6px 0 ;
`;

const SpanAccount = styled.span`
color:#a7a7a7;
`;

const RoundIconContainerDots = styled.div`
margin-left: 44px;
width:60px;
height: 60px;
border-radius: 50%;
border: 1px solid #252C2E;
display: flex;
justify-content: center;
align-items: center;
`;

const Dots = styled.img`
width: 60%;
display: block;
`;

const Onlinecontainer = styled.div`

`;

const SearchContainer = styled.div`

`;  

const OnlineFriends = styled.div`

`;

const ContactsListSection = styled.div`

`;




export default home