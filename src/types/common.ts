type ButtonShapeVariant = 'round' | 'square'
type ButtonThemeVariant = 'light'

export type ButtonVariant =
  | ButtonShapeVariant
  | ButtonThemeVariant
  | `${ButtonShapeVariant} ${ButtonThemeVariant}`
  | 'plain'
