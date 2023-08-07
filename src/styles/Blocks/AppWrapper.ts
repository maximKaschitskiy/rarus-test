import styled from "@emotion/styled"

const AppWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.bgDark};
  box-sizing: border-box;
  padding: 1%;
  gap: 20px;
`

export default AppWrapper