import styled from "@emotion/styled"

const Loader = styled.div<{ load: boolean }>`

  width: 8px;
  height: 20px;
  display: flex;
  border-radius: 4px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
  opacity: ${props => props.load ? 1 : 0};
  transition: all 0.25s linear;


@keyframes animloader {
  0% {
    box-shadow: 20px 0 rgba(255, 255, 255, 0.25), 40px 0 white, 60px 0 white;
  }
  50% {
    box-shadow: 20px 0 white, 40px 0 rgba(255, 255, 255, 0.25), 60px 0 white;
  }
  100% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 rgba(255, 255, 255, 0.25);
  }
}
    
`

export default Loader