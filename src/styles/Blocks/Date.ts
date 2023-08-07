import styled from "@emotion/styled"
import { CSSType } from "../../types"

const Date = styled.p<CSSType & {isOwner: boolean} >`
  font-size: 12px;
  color: ${props => props.isOwner ? props.theme.colors.textDark : props.theme.colors.textTint};
  line-height: 14px;
  ${props => props.style};
`

export default Date