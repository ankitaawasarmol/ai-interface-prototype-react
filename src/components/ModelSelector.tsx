
import React from 'react'
import { useSession, ModelId } from '../store/session'

const MODELS: { id: ModelId; name: string; context: string }[] = [
  { id: 'gpt-3.5', name: 'GPT-3.5 (mock)', context: 'Fast, economical' },
  { id: 'gpt-4', name: 'GPT-4 (mock)', context: 'Stronger reasoning' },
  { id: 'claude-3-haiku', name: 'Claude 3 Haiku (mock)', context: 'Efficient, low-latency' },
  { id: 'mistral-small', name: 'Mistral Small (mock)', context: 'Open, lightweight' },
]

export const ModelSelector: React.FC = () => {
  const model = useSession(s => s.model)
  const setModel = useSession(s => s.setModel)
  return (
    <div className="space-y-1">
      <label htmlFor="model" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Model</label>
      <select id="model" aria-label="Model selector" value={model} onChange={(e)=>setModel(e.target.value as ModelId)}
        className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500">
        {MODELS.map(m => <option key={m.id} value={m.id}>{m.name} — {m.context}</option>)}
      </select>
    </div>
  )
}
