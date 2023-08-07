import styled from "@emotion/styled"
import { CSSType } from "../../types"

const MessageButton = styled.button<CSSType>`
  width: max-content;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 5px;
  border: none;
  border-radius: 50%;
  background-color: rgb(255, 255, 255, 0.1);
  transition: 0.25s;
  align-self: flex-end;
  cursor: pointer;

  ${props => props.style};

  &:hover {
    outline: ${props => `1px solid ${props.theme.colors.itemsLight}`};
  }

`

export default MessageButton