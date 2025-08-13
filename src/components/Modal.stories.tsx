
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Modal } from './Modal'
import { Button } from './Button'

const meta: Meta<typeof Modal> = {
  title: 'Core/Modal',
  component: Modal
}
export default meta
type Story = StoryObj<typeof Modal>

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true)
    return (
      <div>
        <Button onClick={()=>setOpen(true)}>Open</Button>
        <Modal open={open} onClose={()=>setOpen(false)} title="Example">
          Hello from the modal
        </Modal>
      </div>
    )
  }
}
