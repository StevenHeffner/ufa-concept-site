import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
`
export const SliceTitleText = styled.div`
  font-weight: bold;
  font-size: 34px;
  margin-bottom: 27px;
  @media (max-width: 900px) {
    font-size: 28px;
  }
`