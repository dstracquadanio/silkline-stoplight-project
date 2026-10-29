export type LightId = 'red' | 'yellow' | 'green'

export type Light = {
  id: LightId
  onColor: string
  offColor: string
}

export type Phase = {
  lightId: LightId
  durationMs: number
}

// Display order, top to bottom. Never changes.
export const LIGHTS: Light[] = [
  { id: 'red', onColor: '#E53935', offColor: '#7F3A2A' },
  { id: 'yellow', onColor: '#F2C230', offColor: '#857535' },
  { id: 'green', onColor: '#4CAF6A', offColor: '#2F5A3A' },
]

// The cycle, in order. Repeats forever.
export const PHASES: Phase[] = [
  { lightId: 'green', durationMs: 5000 },
  { lightId: 'yellow', durationMs: 1000 },
  { lightId: 'red', durationMs: 2000 },
]
