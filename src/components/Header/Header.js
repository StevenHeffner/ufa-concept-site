import React, { Component } from 'react'
import styled from 'styled-components'
import MenuItem from './components/MenuItem'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const MenuContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  margin-bottom: 30px;
`
const LogoContainer = styled.div`
  width: 175px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoImage = styled.div`
  height: 60px;
  width: 60px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center
  background-image: url(https://www.redlionfire.org/wp-content/uploads/2015/11/fireman-logo.png)
`
const LogoText = styled.div`
  font-weight: 600;
  font-size: 20px;
`

class Header extends Component {
  state = {
    openMenuIndex: null,
  }
  handleClick = index => {
    this.setState({
      openMenuIndex: index === this.state.openMenuIndex ? null : index,
    })
  }

  render() {
    const menuItems = this.props.data.map((item, index) => {
      return (
        <MenuItem
          key={item.id}
          index={index}
          data={item}
          handleClick={this.handleClick}
          openMenuIndex={this.state.openMenuIndex}
        />
      )
    })
    return (
      <Wrapper>
        <LogoContainer>
          <LogoImage/>
          <LogoText>
            United Fire <br/>Authority
          </LogoText>
        </LogoContainer>
        <MenuContainer>{menuItems}</MenuContainer>
      </Wrapper>
    )
  }
}

export default Header
