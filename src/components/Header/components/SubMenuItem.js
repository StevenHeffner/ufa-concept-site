import React, { Component } from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SecondLevelLink = styled.div`
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column
  font-size: 12px;
  transition: background .2s linear
  color: black;

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
const ThirdLevelLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

class SubMenuItem extends Component {
  render() {
    let thirdLevelItems = this.props.data.items.map((item, index) => {
      // console.log(
      //   '1:',
      //   this.props.topLevelRoute,
      //   '2:',
      //   this.props.data.primary.second_level_uid,
      //   '3:',
      //   item.third_level_uid
      // )
      return (
        <Link
          key={index}
          to={`/${this.props.topLevelRoute}/${
            this.props.data.primary.second_level_uid
          }/${item.third_level_uid}`}
        >
          <div style={{ color: '#9F090B' }}>
            <span aria-label="fire" role="img">
              🔥
            </span>{' '}
            {item._3rd_level_link_text}
          </div>
        </Link>
      )
    })
    return (
      <Wrapper>
        <SecondLevelLink index={this.props.index} length={this.props.length}>
          {this.props.data.primary.link_text}
          <ThirdLevelLink>{thirdLevelItems}</ThirdLevelLink>
        </SecondLevelLink>
      </Wrapper>
    )
  }
}

export default SubMenuItem
