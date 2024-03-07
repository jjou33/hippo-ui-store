import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styled'

export interface ButtonBaseProps {
  variant?: ButtonVariant
  label?: string
  children: TextNode
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
    <ButtonContainer {...props} variantSet={variantSet} label={label}>
      {'BUTTON'}
    </ButtonContainer>
  )
}

export default Button
