
import React from 'react'

type Props = {
  id: string
  label: string
  min: number
  max: number
  step?: number
  value: number
  onChange: (v: number) => void
}

export const Slider: React.FC<Props> = ({ id, label, min, max, step=0.1, value, onChange }) => {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-zinc-700 dark:text-zinc-200">{label}: <span className="font-mono">{value}</span></label>
      <input id={id} type="range" min={min} max={max} step={step} value={value}
        aria-label={label}
        onChange={(e)=>onChange(parseFloat(e.target.value))}
        className="w-full accent-brand-600"
      />
    </div>
  )
}
