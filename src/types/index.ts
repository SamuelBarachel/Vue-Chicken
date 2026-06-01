export type BatchMode = 'egg' | 'meat'
export type BatchStatus = 'active' | 'completed' | 'sold'

export interface Batch {
  id: string
  name: string
  mode: BatchMode
  breed: string
  startDate: string
  initialCount: number
  currentCount: number
  status: BatchStatus
  notes?: string
  targetWeight?: number
  targetAgeWeeks?: number
  purchaseCostPerBird?: number
  currency?: string
}

export interface Expense {
  id: string
  batchId: string
  category: 'feed' | 'medicine' | 'vaccine' | 'labor' | 'utilities' | 'equipment' | 'chicks' | 'other'
  amount: number
  date: string
  description: string
}

export interface Revenue {
  id: string
  batchId: string
  type: 'eggs' | 'meat' | 'birds' | 'manure' | 'other'
  quantity: number
  unitPrice: number
  amount: number
  date: string
  notes?: string
}

export interface Mortality {
  id: string
  batchId: string
  count: number
  cause: 'disease' | 'predator' | 'heat' | 'cold' | 'stress' | 'injury' | 'unknown' | 'other'
  date: string
  notes?: string
}

export interface EggCollection {
  id: string
  batchId: string
  date: string
  totalEggs: number
  gradeA: number
  gradeB: number
  broken: number
  notes?: string
}

export interface WeightRecord {
  id: string
  batchId: string
  date: string
  sampleSize: number
  averageWeight: number
  minWeight: number
  maxWeight: number
  notes?: string
}

export interface EnvironmentLog {
  id: string
  batchId: string
  date: string
  time: string
  temperature: number
  humidity?: number
  ammonia?: number
  lightHours?: number
  ventilation?: 'good' | 'fair' | 'poor'
  notes?: string
}

export interface HealthRecord {
  id: string
  batchId: string
  date: string
  type: 'vaccination' | 'treatment' | 'observation' | 'deworming'
  description: string
  product?: string
  dosage?: string
  vet?: string
  nextDue?: string
}

export interface AppSettings {
  currency: string
  currencySymbol: string
  weightUnit: 'kg' | 'lb'
  temperatureUnit: 'C' | 'F'
  darkMode: boolean
}
