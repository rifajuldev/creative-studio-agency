import { llmsTxtResponse } from '@/lib/seo/llms-content'

export const dynamic = 'force-static'
export const revalidate = 86400

/** Alias for /llms.txt */
export function GET() {
  return llmsTxtResponse()
}
