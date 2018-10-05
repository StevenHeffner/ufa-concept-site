import React, { Component } from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: collum;
`

const SecondLevelLink = styled.div`
  height: 40px;
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  transition: background .2s linear
  color: #9F090B;

  &:hover {
    background: #f3f3f3;
  }
  border-radius: ${props =>
    props.index === 0
      ? `5px 5px 0px 0px`
      : props.length === props.index
        ? `0px 0px 5px 5px`
        : null};
`

class SubMenuItem extends Component {
  render() {
    console.log(this.props.data)
    const { second_level_link_label, second_level_link1 } = this.props.data
    return (
      <Wrapper>
        {/* <Link to >
        </Link> */}
        <SecondLevelLink index={this.props.index} length={this.props.length}>
          {second_level_link_label}
        </SecondLevelLink>
      </Wrapper>
    )
  }
}

export default SubMenuItem
