import styled from "@emotion/styled"

const MessagesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 1%;
  background-color: ${props => props.theme.colors.bgDark};
  gap: 10px;
  overflow-y: scroll;
`

export default MessagesWrapper