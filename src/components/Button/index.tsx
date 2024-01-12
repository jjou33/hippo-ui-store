import React from 'react'
import { css } from '@emotion/react'
import * as S from './styles'

interface ButtonProps {
  children: React.ReactNode
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  theme?: 'primary' | 'secondary' | 'tertiary'
}

const themes = {
  primary: css`
    background: #20c997;
    color: white;
    &:hover {
      background: #38d9a9;
    }
    &:active {
      background: #12b886;
    }
  `,
  secondary: css`
    background: #e9ecef;
    color: #343a40;
    &:hover {
      background: #f1f3f5;
    }
    &:active {
      background: #dee2e6;
    }
  `,
  tertiary: css`
    background: none;
    color: #20c997;
    &:hover {
      background: #e6fcf5;
    }
    &:active {
      background: #c3fae8;
    }
  `,
}

const Button = ({ children, theme = 'primary', onClick }: ButtonProps) => {
  return (
    <S.ButtonContainer ButtonTheme={themes[theme]} onClick={onClick}>
      {children}
    </S.ButtonContainer>
  )
}

export default Button
