
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'
import React from 'react'

const meta: Meta<typeof Slider> = {
  title: 'Core/Slider',
  component: Slider
}
export default meta
type Story = StoryObj<typeof Slider>

export const Basic: Story = {
  args: { id: 's', label: 'Temperature', min: 0, max: 2, step: 0.1, value: 0.7, onChange: ()=>{} }
}
