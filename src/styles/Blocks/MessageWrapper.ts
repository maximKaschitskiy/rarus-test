import styled from "@emotion/styled"

const MessageWrapper = styled.div<any>`
  max-width: 75%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.isOwner ? "flex-end": "flex-start"};
  box-sizing: border-box;
  padding: 2% 3%;
  background-color: ${props => props.isOwner ? props.theme.colors.itemsColored : props.theme.colors.itemsTint};
  border-radius: ${props => props.isOwner ? "15px 0 15px 15px" : "0 15px 15px 15px"};
  align-self: ${props => props.isOwner ?  "flex-end" : "flex-start"};
  opacity: ${props => props.delivered ?  "1" : "0.5"};
  transition: 0.1s;
`;

export default MessageWrapper