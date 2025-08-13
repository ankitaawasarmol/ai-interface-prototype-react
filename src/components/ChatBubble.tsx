
import React from 'react'

type Props = {
  role: 'user' | 'assistant'
  text: string
}

export const ChatBubble: React.FC<Props> = ({ role, text }) => {
  const isUser = role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2 shadow-soft
        ${isUser ? 'bg-brand-600 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'}`}
        role="article" aria-label={`${role} message`}>
        {text}
      </div>
    </div>
  )
}
