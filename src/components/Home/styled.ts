import styled from '@emotion/styled/macro'
import { keyframes } from '@emotion/react'

export const AppContainer = styled.div`
  text-align: center;
`

export const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const LogoWrapper = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: App-logo-spin infinite 20s linear;
`

export const AppLink = styled.a`
  color: #61dafb;
`

export const AppHeaderWrapper = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
