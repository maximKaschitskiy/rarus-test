import styled from "@emotion/styled"
import { CSSType } from "../../types"

const SendButton = styled.button<CSSType>`
  width: max-content;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 10px;
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.itemsColored};
  transition: 0.25s;
  cursor: pointer;
  ${props => props.style};

  &:hover {
    outline: ${props => `1px solid ${props.theme.colors.itemsLight}`};
  }

`

export default SendButton