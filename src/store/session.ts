
import { create } from 'zustand'

export type ModelId = 'gpt-3.5' | 'gpt-4' | 'claude-3-haiku' | 'mistral-small'

export type Template = { id: string; name: string; prompt: string }
export type Params = { temperature: number; maxTokens: number; topP: number }

type SessionState = {
  model: ModelId
  setModel: (m: ModelId) => void
  templates: Template[]
  addTemplate: (t: Template) => void
  removeTemplate: (id: string) => void
  params: Params
  setParams: (p: Partial<Params>) => void
}

const defaultTemplates: Template[] = [
  { id: 't1', name: 'Summarize', prompt: 'Summarize the following text in 3 bullet points:' },
  { id: 't2', name: 'Translate', prompt: 'Translate to English:' },
  { id: 't3', name: 'Bug Report', prompt: 'Write a concise bug report for:' }
]

const load = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) as T : fallback
  } catch { return fallback }
}
const save = (key: string, value: unknown) => localStorage.setItem(key, JSON.stringify(value))

export const useSession = create<SessionState>((set) => ({
  model: load<ModelId>('model', 'gpt-4'),
  setModel: (m) => { save('model', m); set({ model: m }) },
  templates: load<Template[]>('templates', defaultTemplates),
  addTemplate: (t) => set((s) => { const v = [...s.templates, t]; save('templates', v); return { templates: v } }),
  removeTemplate: (id) => set((s) => { const v = s.templates.filter(t => t.id !== id); save('templates', v); return { templates: v } }),
  params: load<Params>('params', { temperature: 0.7, maxTokens: 512, topP: 1 }),
  setParams: (p) => set((s) => { const v = { ...s.params, ...p}; save('params', v); return { params: v } })
}))
