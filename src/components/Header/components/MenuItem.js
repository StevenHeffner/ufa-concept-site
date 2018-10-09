import React, { Component } from 'react'
import styled from 'styled-components'
import SubMenuItem from './SubMenuItem'

import { Link } from 'gatsby'

const TopLevelLink = styled.div`
  height: 35px;
  text-align: center;
  color: black;
  border-radius: 5px;
  font-size: 14px;
  background: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background .2s, font-weight .2s
  transition-timing-function: linear;
  font-weight: ${props => (props.index === props.open ? `600` : `500`)}
  &:hover {
    background: #f3f3f3;
  }
`
const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
const SubMenu = styled.div`
  visibility: ${props => (props.index === props.open ? `visibile` : `hidden`)}
  position: absolute;
  width: 165px;
  max-height: 300px
  left: -29px;
  background: #ffffff;
  border-radius: 5px;
  margin-top: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  z-index: 1
`

class MenuItem extends Component {
  render() {
    
    
    const { body: items } = this.props.data.link_to_menu_item.document[0].data
    const arrayLength = items.length - 1
    const subMenuItems = items.map((item, index) => {
      return (
        <SubMenuItem
          key={index}
          index={index}
          data={item}
          length={arrayLength}
        />
      )
    })

    return (
      <Wrapper>
        <TopLevelLink
          onClick={() => this.props.handleClick(this.props.index)}
          index={this.props.index}
          open={this.props.openMenuIndex}
        >
          {this.props.data.link_to_menu_item.document[0].data.first_level_text}
        </TopLevelLink>
        <SubMenu index={this.props.index} open={this.props.openMenuIndex}>
          {subMenuItems}
        </SubMenu>
      </Wrapper>
    )
  }
}

export default MenuItem
