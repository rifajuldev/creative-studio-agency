export const SERVICE_OPTIONS = [
  { value: 'animation', label: '2D Animation' },
  { value: 'marketing', label: 'Digital Marketing' },
  { value: 'webdev', label: 'Web Development' },
  { value: 'appdev', label: 'App Development' },
  { value: 'ai', label: 'AI & Integrations' },
  { value: 'design', label: 'UI/UX Design' },
] as const

export const INDUSTRY_OPTIONS = [
  'Agriculture',
  'Automotive',
  'Banking',
  'Construction',
  'Education',
  'Energy',
  'Entertainment',
  'Fashion',
  'Food and Beverage',
  'Healthcare',
  'Hospitality',
  'Information Technology',
  'Insurance',
  'Manufacturing',
  'Mining',
  'Pharmaceuticals',
  'Real Estate',
  'Retail',
  'Telecommunications',
  'Transportation',
  'Utilities',
] as const

export const INDUSTRY_OTHER_VALUE = 'Other'

export const BUDGET_OPTIONS = [
  { value: '500-1500', label: '$500 – $1,500' },
  { value: '2k-5k', label: '$2,000 – $5,000' },
  { value: '5k-10k', label: '$5,000 – $10,000' },
  { value: '10k-25k', label: '$10,000 – $25,000' },
  { value: '25k-50k', label: '$25,000 – $50,000' },
  { value: '50k+', label: '$50,000+' },
] as const

export const BUDGET_CUSTOM_VALUE = 'custom'

export const briefFormInitialValues = {
  name: '',
  email: '',
  service: '',
  industry: '',
  customIndustry: '',
  budget: '',
  customBudget: '',
  preferredStartDate: '',
  message: '',
}

export type BriefFormValues = typeof briefFormInitialValues

export const resolveIndustryValue = (industryChoice: string, customIndustry: string) => {
  if (industryChoice === INDUSTRY_OTHER_VALUE) {
    return customIndustry.trim()
  }
  return industryChoice.trim()
}

export const resolveBudgetValue = (budgetChoice: string, customBudget: string) => {
  if (budgetChoice === BUDGET_CUSTOM_VALUE) {
    return customBudget.trim()
  }
  return budgetChoice.trim()
}

export const toBriefPayload = (values: BriefFormValues) => ({
  name: values.name.trim(),
  email: values.email.trim(),
  service: values.service,
  industry: resolveIndustryValue(values.industry, values.customIndustry),
  budget: resolveBudgetValue(values.budget, values.customBudget),
  preferredStartDate: values.preferredStartDate,
  message: values.message.trim(),
})
