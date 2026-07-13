'use client'

import AppShell from '@/components/layout/AppShell'
import '@/redux/features/blog/blogPublic.api'
import '@/redux/features/booking/booking.api'
import '@/redux/features/portfolio/portfolioPublic.api'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Toaster position="top-center" />
      <AppShell>{children}</AppShell>
    </Provider>
  )
}

export default ClientProviders
