import React from 'react'
import { Activity } from '../types'

type CalorieTrackerProps ={
    activities: Activity[]
}

export default function CalorieTracker({activities}:CalorieTrackerProps) {
  return (
    <div>CalorieTracker</div>
  )
}
