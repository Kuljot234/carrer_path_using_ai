export interface CareerRecommendation {
  title: string
  description: string
  matchScore: number
  keySkills: string[]
  salaryRange: {
    min: number
    max: number
  }
  growthPotential: number
}
