import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { ButtonContainer } from './styled'
import type { ButtonVariant } from '@/types/common'

export interface ButtonBaseProps extends PropsWithChildren {
  variant?: ButtonVariant
  label?: string
}

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  variant = 'square',
  label,
  children,
  ...props
}: ButtonProps) => {
  const isPlain = variant === 'plain'
  const hasBackground = !variant.includes('light') && !isPlain
  const isSquare = !variant.includes('round')

  const variantSet = {
    isPlain,
    hasBackground,
    isSquare,
  }

  return (
    <ButtonContainer {...props} variantSet={variantSet} aria-label={label}>
      {children}
    </ButtonContainer>
  )
}

export default Button
