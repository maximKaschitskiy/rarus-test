import styled from "@emotion/styled"

const Header = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 1%;
  background-color: ${props => props.theme.colors.bgLight};
  gap: 10px;
`

export default Header