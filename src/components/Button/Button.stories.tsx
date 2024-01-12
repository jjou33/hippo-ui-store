import type { Meta, StoryObj } from '@storybook/react'
import Button from './index'

const meta = {
  title: 'component/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

export const button = () => {
  return <Button>{'BUTTON'}</Button>
}

button.story = {
  name: 'Default',
}
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    theme: 'primary',
    children: 'PRIMARY',
  },
}

export const Secondary: Story = {
  args: {
    theme: 'secondary',
    children: 'SECONDARY',
  },
}

export const TertiaryButton: Story = {
  args: {
    theme: 'tertiary',
    children: 'TERTIARY',
  },
}
