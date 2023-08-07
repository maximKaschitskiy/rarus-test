import styled from "@emotion/styled"

const ButtonsWrapper = styled.div<{isOwner: boolean}>`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: ${props => props.isOwner ? "flex-end" : "flex-start"};
  flex-direction:  ${props => props.isOwner ? "row" : "row-reverse"};
  box-sizing: border-box;
  padding: 1%;
  gap: 10px;
`

export default ButtonsWrapper