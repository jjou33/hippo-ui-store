import styled from '@emotion/styled'

export const ButtonContainer = styled.button<{background: string}>`
  background-color : ${({background}) => background};
`