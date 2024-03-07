import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface IButtonProps {
  variantSet: {
    isPlain: boolean
    hasBackground: boolean
    isSquare: boolean
  }
  label?: string
}
export const ButtonContainer = styled.button<IButtonProps>`
  cursor: pointer;
  width: fit-content;

  &:disabled,
  &.disabled {
    cursor: not-allowed;
  }

  &,
  * {
    font-size: 1rem;
    font-weight: 400;
  }

  svg,
  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  ${({ variantSet }) => {
    if (variantSet.isPlain) {
      return css`
        background: transparent;
      `
    }
    return css`
      border-radius: ${variantSet.isSquare ? '8px' : 'calc(1rem + 24px)'};
      background-color: ${variantSet.hasBackground ? 'red' : 'white'};
      border: 2px solid ${'red'};

      &:hover {
        background-color: ${variantSet.hasBackground ? 'blue' : 'white'};
        border: 2px solid ${'blue'};
      }

      &:disabled,
      &.disabled {
        background-color: ${variantSet.hasBackground ? 'gray' : 'white'};
        border: 2px solid ${'gray'};
      }
    `
  }}
`
