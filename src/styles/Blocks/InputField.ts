import styled from "@emotion/styled"

const InputField = styled.input`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 0% 2%;
  background-color: transparent;
  border: 0;
  outline: 0;
  color: ${props => props.theme.colors.textLight};
`

export default InputField
