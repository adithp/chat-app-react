import React from 'react'
import styled from 'styled-components';
function home() {
  return (
    <HomeContainer>
        <Wrapper>
            <ControlContainer></ControlContainer>
            <ProfileContainer></ProfileContainer>
            <MainContainer></MainContainer>
            <ProfileDetailsContainer></ProfileDetailsContainer>
        </Wrapper>
    </HomeContainer>
  )
}



const HomeContainer = styled.div``;
const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 5fr 3fr;
`;
const ControlContainer = styled.div`
height: 100vh;
background-color: red;
`;
const ProfileContainer = styled.div`
height:100vh;
background-color:blue ;
`;
const MainContainer = styled.div`
height:100vh;
background-color:green;
`;
const ProfileDetailsContainer = styled.div`
height:100vh;
background-color:yellow;
`;

export default home