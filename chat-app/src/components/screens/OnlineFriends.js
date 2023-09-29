import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars-2';
import profile1 from '../../Assets/images/Profile (1).jpg';
import profile2 from '../../Assets/images/Profile (2).jpg';
import profile3 from '../../Assets/images/Profile (3).jpg';
import profile4 from '../../Assets/images/Profile (4).jpg';
import profile5 from '../../Assets/images/Profile (5).jpg';
import profile6 from '../../Assets/images/Profile (6).jpg';
import searchicon from '../../Assets/images/Music-dashboard-icons-1.svg';
import greydots from '../../Assets/images/grey dots.svg';
function OnlineFriends() {
    const [myContacts,setMyContacts] = useState([])
    useEffect(()=>{
        setMyContacts([{
            id:1,
            time:"12:34",
            typing:false,
            name:"Putra Pratama",
            tag:"hey, how are you man ?",
            online:true,
            image:profile1,
            messages:[{
                message:"hey, how are you man?",
                time:"12:34",
                send:true,
            },
            {
                message:"i am fine",
                time:"12:35",
                send:false,
            },
        ]  
            },
            {
                id:2,
                time:"12:34",
                typing:true,
                name:"Michael",
                tag:"Typing",
                online:true,
                image:profile2,
                messages:[{
                    message:"hey, how are you man?",
                    time:"12:34",
                    send:true,
                },
                {
                    message:"i am fine",
                    time:"12:35",
                    send:false,
                },
            ]  
                },
                {
                    id:3,
                    time:"12:34",
                    typing:false,
                    name:"Jarow",
                    tag:"Good Morning",
                    online:false,
                    image:profile3,
                    messages:[{
                        message:"hey, how are you man?",
                        time:"12:34",
                        send:true,
                    },
                    {
                        message:"i am fine",
                        time:"12:35",
                        send:false,
                    },
                ]  
                    },
                    {
                        id:4,
                        time:"12:34",
                        typing:false,
                        name:"Kasmad",
                        tag:"hey, how are you man ?",
                        online:false,
                        image:profile4,
                        messages:[{
                            message:"hey, how are you man?",
                            time:"12:34",
                            send:true,
                        },
                        {
                            message:"i am fine",
                            time:"12:35",
                            send:false,
                        },
                    ]  
                        },
                        {
                            id:5,
                            time:"12:34",
                            typing:false,
                            name:"Mawar",
                            tag:"hey, how are you man ?",
                            online:true,
                            image:profile5,
                            messages:[{
                                message:"hey, how are you man?",
                                time:"12:34",
                                send:true,
                            },
                            {
                                message:"i am fine",
                                time:"12:35",
                                send:false,
                            },
                        ]  
                            },
                            {
                                id:6,
                                time:"12:34",
                                typing:false,
                                name:"Melti",
                                tag:"hey, how are you man ?",
                                online:true,
                                image:profile6,
                                messages:[{
                                    message:"hey, how are you man?",
                                    time:"12:34",
                                    send:true,
                                },
                                {
                                    message:"i am fine",
                                    time:"12:35",
                                    send:false,
                                },
                            ]  
                                },])
           
    },[])
let MessagesOutput = ()=>{
    return (
    <>
    <ChatStructDiv>
        <ChatParagraph>
            Hello Nizar Ali
        </ChatParagraph>
        <ChatTime>12:36PM</ChatTime>
    </ChatStructDiv>
    <ChatStructDiv>
        <ChatParagraph>
            Good afternoon, may i ask your help to male me a reel estate landing page for more details i wll send as soon as you approve it.thanks!
        </ChatParagraph>
        <ChatTime>12:36PM</ChatTime>
    </ChatStructDiv>
    </>
    
    )
}
   
let CheckOnline = (contact)=>{
    return contact.online === true ? <RoundDivForMessages></RoundDivForMessages> : null;
}
let TypingorTag = (contact)=>{
    return contact.typing === true ? <TypingHead>Typing...</TypingHead> : <TagHead>{contact.tag}</TagHead>
}
let MessageContact = ()=> {

    return myContacts.map((contact)=>(
        <>
        <Contact>
            <ContactImageSection>
                <ContactImage src={contact.image}/>
                {CheckOnline(contact)} 
            </ContactImageSection>
            <NmaeTagSection>
                <NameHeading>{contact.name}</NameHeading>
                {TypingorTag(contact)}
            </NmaeTagSection>
            <TimingSection>
                <GreyDotImg src={greydots} />
                <TimeSpan>{contact.time}</TimeSpan>
            </TimingSection>
        </Contact>

        </>
    ))
        
}
let onlinefriendsfun =()=> {
    
    return myContacts.map((item)=>(
        <OnlineFriendsli key={item.id} >
            <OnlineFriendImage src={item.image}/>
            <SpanMore>More</SpanMore>
            <RoundDiv></RoundDiv> 
        </OnlineFriendsli>
    ))
}
    return (
        <>
        <ContainerSection>
        <LeftSection>
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
        <SeaOnlSection>
            <SearchSection>
                <SearchInput type="text" name="search" id="search" placeholder="Search or start new chat" />
            </SearchSection>
            <OnlineFriendsSection>
                <HeadingOnline>Online Now</HeadingOnline>
                <OnlineFriendsUl>
                {onlinefriendsfun()}
                </OnlineFriendsUl>
               <MessageContactSection>
                <HeadingMessage>Messages</HeadingMessage>
                <Scrollbars autoHeight autoHeightMin={520}>
               {MessageContact()}
               </Scrollbars>
               </MessageContactSection>
            </OnlineFriendsSection>
        </SeaOnlSection>
        </LeftSection>
        <MainChatSection>
            <ProfileBorderSection>
                <ChatLeftSection>
                    <ChatPersonImageContainer>
                        <ChatPersonImage src={profile1} />
                    </ChatPersonImageContainer>
                    <ChatPersonDetailsSection>
                        <ChatPersonName>Michael</ChatPersonName>
                        <ChatPersonTag>Typing...</ChatPersonTag>
                    </ChatPersonDetailsSection>
                </ChatLeftSection>
                <OptionSection>
                    <IconRoundContainer>
                        <OptionIcon src={require("../../Assets/images/Property 1=phone.svg").default} alt="phoneicon"/>
                    </IconRoundContainer>
                    <IconRoundContainer>
                        <OptionIcon src={require("../../Assets/images/Property 1=video-camera.svg").default} alt="Property 1=video-camera" />
                    </IconRoundContainer>
                    <IconRoundContainer>
                        <OptionIcon src={require("../../Assets/images/Option.svg").default} alt="dots" />
                    </IconRoundContainer>
                </OptionSection>
            </ProfileBorderSection>
            <ChatsSection>
                <DateSection>
                    <MessagedDate>Today</MessagedDate>
                </DateSection>
                <MessagesUl>
                    {MessagesOutput()}
                </MessagesUl>
            </ChatsSection>
            <InputSection></InputSection>
        </MainChatSection>
        </ContainerSection>
        </>
    )
}

const LeftSection = styled.div`
width: 30%;
`;

const MyProfileContainer = styled.div`
display: flex;
padding:32px;
border-bottom: 1px solid #252C2E;
box-sizing: border-box;
height: 14vh;
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

const SeaOnlSection = styled.div``;

const SearchSection = styled.div`
padding:24px;
`;

const SearchInput = styled.input`
opacity: 0.8;
color:#fff;
font-size: 14px;
padding-left:56px ;
height: 50px;
width: 98%;
background-color: #202427;
border: none;
outline: none;
border-radius: 8px;
background-image:url(${searchicon}) ;
background-repeat: no-repeat;
background-position:left 10px center;
        ::placeholder{
                color:#24282B;
            }
`;

const OnlineFriendsSection = styled.div`
padding-left: 24px;
padding-right: 24px;

`;

const OnlineFriendsUl = styled.div`
display: flex;
list-style: none;
padding: 24px 0;
`;

const OnlineFriendsli = styled.div`
text-align: center;
margin-right: 24px;
position: relative;
            &:last-child{
                margin-right: 0px;
            }

`;

const OnlineFriendImage = styled.img`
border-radius: 50%;
width: 120%;

`;

const RoundDiv = styled.div`
width: 12px;
height: 12px;
border-radius: 50%;
background-color: #48A5C3;
position: absolute;
top: 0;
right: -8px;
`;
const HeadingOnline = styled.h2`
color: #fff;
font-weight: 500;
`;

const SpanMore = styled.span`
color: #373B3C;
font-size:12px;
margin-left:4px; 
text-align: center;
`;

const HeadingMessage = styled.h2`
color: #fff;
font-weight: 500;
font-size: 26px;
margin-bottom: 24px;
`;
const MessageContactSection = styled.div`

`;

const Contact = styled.div`
height: 15%;
display: flex;
position: relative;
`;

const ContactImageSection = styled.div`
position: relative;
margin-bottom: 24px;
margin-right: 24px;
`;

const ContactImage = styled.img`
border-radius: 50%;
width: 60px;
`;

const NmaeTagSection = styled.div`
padding: 8px 0;

`;

const NameHeading = styled.h4`
color: #fff;
font-weight: 500;
opacity: 0.9;
margin-bottom: 12px;
`;

const RoundDivForMessages = styled.div`
width: 12px;
height: 12px;
border-radius: 50%;
`;

const TypingHead = styled.h4`
color: #48A5C3;
font-weight: 500;
font-size: 12px;
`;

const TagHead = styled.h4`
color: #AEAFB1;
font-weight: 500;
font-size: 12px;
`;

const GreyDotImg = styled.img`
margin-right: 8px;
`;

const TimingSection = styled.div`
position: absolute;
right: 0;
display: flex;
`;

const TimeSpan = styled.span`
color:#252C2E;
`;

const MainChatSection = styled.div`
border-right: 1px solid #252C2E;
border-left: 1px solid #252C2E;
min-width: 500px;
width: 70%;
`;

const ProfileBorderSection = styled.div`
height: 14vh;
border-bottom: 1px solid #252C2E;
display: flex;
padding: 32px;
justify-content: space-between;
`;


const ChatLeftSection = styled.div`
display: flex;
align-items: center;
`;

const ChatPersonImageContainer = styled.div`
margin-right:16px;
`;

const ChatPersonImage = styled.img`
width: 70px;
border-radius: 50%;
`;


const ChatPersonDetailsSection = styled.div``;

const ChatPersonName = styled.h3`
color: #fff;
margin-bottom: 6px;
`;

const ChatPersonTag = styled.span`
color: #48A5C3;
font-weight: 500;
font-size: 12px;
`;

const OptionSection = styled.div`
display: flex;
`;

const IconRoundContainer = styled.div`
width:60px;
height: 60px;
border-radius: 50%;
border: 1px solid #252C2E;
display: flex;
justify-content: center;
align-items: center;
margin-right: 8px;
        &:last-child{
            margin-right: 0;
        }
`;

const OptionIcon = styled.img``;

const ChatsSection = styled.div`
background-color: #0A0E0F;
height: 80vh;
`;

const DateSection = styled.div`
text-align: center;
padding-top: 8px;
`;

const MessagedDate = styled.h6`
color:#fff;
font-size: 16px;

`;

const MessagesUl = styled.div`
padding: 18px;
display: flex;
flex-direction: column;
`;

const InputSection = styled.div``;

const ContainerSection = styled.div`
display: flex;
`;

const ChatStructDiv = styled.div`
display: inline-block;
padding:18px;
background-color: #161B1C;
border-radius: 0 10px 10px 10px;
position: relative;
margin-bottom: 24px;
max-width:40%;
width:fit-content;
`;
const ChatParagraph = styled.p`
color: #767A7D;
`;
const ChatTime = styled.span`
position: absolute;
font-size: 10px;
bottom: -20px;
right: 0;
color:#767A7D;
`;







export default OnlineFriends
