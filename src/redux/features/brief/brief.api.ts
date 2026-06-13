import type { IBriefRequest } from '@/interfaces/brief.interface'
import { api } from '@/redux/api/api'

const briefApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBrief: builder.mutation({
      query: (body: IBriefRequest) => ({
        url: '/brief/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['brief'],
    }),
  }),
})

export const { useCreateBriefMutation } = briefApi
