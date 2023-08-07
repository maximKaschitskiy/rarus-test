import styled from "@emotion/styled"

const InputWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 1%;
  background-color: ${props => props.theme.colors.bgLight};
`

export default InputWrapper