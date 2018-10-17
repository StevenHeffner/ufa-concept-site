import React, { Component } from 'react'
import styled from 'styled-components'
import MenuItem from './components/MenuItem'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  width: 100%;
  height: 83px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  top: 0;
  left: 0;
  padding: 0px 60px;
  position: fixed;
  z-index: 1;
  box-shadow: ${props => props.isTop ? 'none' : '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);'}
  transition: box-shadow .2s ease-in-out
`
const MenuContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between'
  margin-top: 30px;
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
  background-image: url(https://www.redlionfire.org/wp-content/uploads/2015/11/fireman-logo.png);
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
    isTop: true,
  }

  componentDidMount = () => {
    document.addEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    const isTop = window.scrollY < 1
    if (isTop !== this.state.isTop) {
      this.setState({isTop})
    }
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
      <Wrapper id="nav" isTop={this.state.isTop}>
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
