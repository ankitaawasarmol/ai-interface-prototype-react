
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Core/Button',
  component: Button
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { children: 'Click me' } }
export const Secondary: Story = { args: { children: 'Secondary', variant: 'secondary' } }
export const Ghost: Story = { args: { children: 'Ghost', variant: 'ghost' } }
