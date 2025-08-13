
import React from 'react'
import { Slider } from './Slider'
import { useSession } from '../store/session'

export const ParametersPanel: React.FC = () => {
  const params = useSession(s => s.params)
  const setParams = useSession(s => s.setParams)
  return (
    <div className="space-y-4" aria-label="Parameters panel">
      <Slider id="temperature" label="Temperature" min={0} max={2} step={0.1} value={params.temperature} onChange={(v)=>setParams({ temperature: v })} />
      <Slider id="maxTokens" label="Max Tokens" min={16} max={4096} step={16} value={params.maxTokens} onChange={(v)=>setParams({ maxTokens: v })} />
      <Slider id="topP" label="Top P" min={0} max={1} step={0.05} value={params.topP} onChange={(v)=>setParams({ topP: v })} />
    </div>
  )
}
