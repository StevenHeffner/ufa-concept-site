import React, { Component } from 'react'
import styled from 'styled-components'
import MenuItem from './components/MenuItem'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center
`
const MenuContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 18px;
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
  background-position: center;
  background-image: url(https://www.redlionfire.org/wp-content/uploads/2015/11/fireman-logo.png)
`
const LogoText = styled.div`
  color: black;
  text-decoration: none;
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
          key={index}
          index={index}
          data={item}
          handleClick={this.handleClick}
          openMenuIndex={this.state.openMenuIndex}
        />
      )
    })
    return (
      <Wrapper>
        <Link to="/">
          <LogoContainer>
            <LogoImage />
            <LogoText>
              United Fire <br />
              Authority
            </LogoText>
          </LogoContainer>
        </Link>
        <MenuContainer>{menuItems}</MenuContainer>
      </Wrapper>
    )
  }
}

export default Header
