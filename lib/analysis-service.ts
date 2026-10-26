export type AnalysisResult = {
  score: number
  confidence: number
  gait?: {
    cadence: number
    symmetry: number
  }
}

export async function analyzeScreening(includeGait: boolean): Promise<AnalysisResult> {
  await new Promise((resolve) => setTimeout(resolve, 1200))

  return {
    score: 58,
    confidence: 84,
    ...(includeGait ? { gait: { cadence: 106, symmetry: 91 } } : {}),
  }
}
