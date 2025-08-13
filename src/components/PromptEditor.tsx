
import React from 'react'
import { Button } from './Button'
import { useSession } from '../store/session'

export const PromptEditor: React.FC<{
  value: string
  setValue: (v: string) => void
}> = ({ value, setValue }) => {
  const { templates, addTemplate, removeTemplate } = useSession()
  const [name, setName] = React.useState('New Template')

  return (
    <div className="space-y-2">
      <label htmlFor="prompt" className="sr-only">Prompt</label>
      <textarea
        id="prompt"
        className="w-full min-h-[160px] resize-y rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
        placeholder="Type your prompt here..."
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        aria-label="Prompt editor"
      />
      <div className="flex gap-2 flex-wrap items-center">
        <input aria-label="Template name" value={name} onChange={(e)=>setName(e.target.value)}
          className="rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2"/>
        <Button onClick={()=>{
          const id = Math.random().toString(36).slice(2)
          addTemplate({ id, name, prompt: value })
        }}>Save Template</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {templates.map(t => (
          <div key={t.id} className="rounded-2xl border border-zinc-200 dark:border-zinc-700 p-3">
            <div className="flex items-center justify-between gap-2">
              <div className="font-medium">{t.name}</div>
              <div className="flex gap-2">
                <Button variant="secondary" onClick={()=>setValue(t.prompt)} aria-label={`Load template ${t.name}`}>Load</Button>
                <Button variant="ghost" onClick={()=>removeTemplate(t.id)} aria-label={`Delete template ${t.name}`}>Delete</Button>
              </div>
            </div>
            <pre className="mt-2 max-h-24 overflow-auto text-sm whitespace-pre-wrap">{t.prompt}</pre>
          </div>
        ))}
      </div>
    </div>
  )
}
