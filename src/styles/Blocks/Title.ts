import styled from "@emotion/styled"

const Subtitle = styled.h2`
  line-height: 22px;
  color: ${props => props.theme.colors.textLight};
  margin: 0;
  ${props => props.theme.fonts.subtitle};
`

export default Subtitle