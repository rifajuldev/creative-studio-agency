import { llmsFullTxtResponse } from '@/lib/seo/llms-content'

export const dynamic = 'force-static'
export const revalidate = 86400

export function GET() {
  return llmsFullTxtResponse()
}
