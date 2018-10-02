import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
`
const MenuContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-right: 30px;
  margin-bottom: 30px;
`
const MenuItem = styled.div`
  height: 100%;
  width: 50px;
  text-align: center;
  color: light-grey;
  border-radius: 5px;
  font-size: 12px;
`

const Header = () => {
    return ( 
        <Wrapper>
          <MenuContainer>
            <MenuItem>Home</MenuItem>
            <MenuItem>News</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Actions</MenuItem>
          </MenuContainer>
        </Wrapper>
     );
}
 
export default Header;
