
import type { Meta, StoryObj } from '@storybook/react'
import { ChatBubble } from './ChatBubble'

const meta: Meta<typeof ChatBubble> = {
  title: 'Core/ChatBubble',
  component: ChatBubble
}
export default meta
type Story = StoryObj<typeof ChatBubble>

export const User: Story = { args: { role: 'user', text: 'Hi there!' } }
export const Assistant: Story = { args: { role: 'assistant', text: 'Hello! How can I help?' } }
