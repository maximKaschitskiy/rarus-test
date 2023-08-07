import styled from "@emotion/styled"
import { CSSType } from "../../types"

const Text = styled.p<CSSType>`
  ${props => props.style};
`

export default Text