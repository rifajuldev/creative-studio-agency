import { cn } from '@/utils/cn'
import { AlertCircleIcon } from 'lucide-react'

interface FormErrorMessageProps {
  message: string
  className?: string
}

const FormErrorMessage = ({ message, className }: FormErrorMessageProps) => {
  if (!message) return null

  return (
    <p className={cn('mt-1 flex items-center gap-1 text-xs text-red-500', className)}>
      <AlertCircleIcon className="size-3 shrink-0" /> {message}
    </p>
  )
}

export default FormErrorMessage
