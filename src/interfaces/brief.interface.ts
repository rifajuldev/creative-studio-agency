export interface IBriefRequest {
  name: string
  email: string
  service: string
  industry: string
  budget: string
  preferredStartDate: string
  message: string
}

export type TBriefStatus = 'new' | 'read' | 'in_progress' | 'closed'
