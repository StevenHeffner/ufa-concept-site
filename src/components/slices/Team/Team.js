import React from 'react'
import styled from 'styled-components'
import { Wrapper, SliceTitleText } from '../sliceStyles'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 380px);
  justify-content: center;
`
const MemberWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const MemberDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
`

const Img = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.url});
  height: 200px;
  width: 200px;
  margin-bottom: 20px;
`


const Text = styled.p`
  font-size: 16px;

`
const TitleText = styled(Text)`
  font-size: 24px
  font-weight: 600
`



const Team = ({ data }) => {
  let {
    primary: {
      team_section: { text: teamName },
    },
    items: teamMembers,
  } = data
  

  let length = teamMembers.length - 1
  let team = teamMembers.map((member, index) => {
    let {
      first_and_lastname: { text: name },
      portrait: { url: imgUrl },
      position: { text: position },
    } = member
    return (
      <MemberWrapper key={index}>
        <Img index={index} length={length} url={imgUrl} />
        <MemberDetails>
          <TitleText>{name}</TitleText>
          <Text>{position}</Text>
        </MemberDetails>
      </MemberWrapper>
    )
  })
  return (
    <Wrapper>
      <SliceTitleText>{teamName}</SliceTitleText>
      <Container>{team}</Container>
    </Wrapper>
  )
}

export default Team
