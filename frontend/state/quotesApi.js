// create your RTK Query endpoints here
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



//need "Quotes" tag?????

export const quotesApi = createApi ({

    reducerPath: 'quotesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9009/api/'}),
    tagTypes: ['Quotes'],
    endpoints: build => ({

        getQuotes: build.query ({
            query: () => 'quotes',
            providesTags: ['Quotes']
        }),

        createQuotes: build.mutation ({
            query: quotes => ({
                url: 'quotes',
                method: 'POST',
                body: quotes
            }),
            invalidatesTags: ['Quotes']
        }),

        toggleFake: build.mutation ({
            query: ({id, quote}) => ({
                url: `quotes/${id}`,
                method: 'PUT',
                body: quote
            }),
            invalidatesTags: ['Quotes']
        }),


        deleteQuote: build.mutation ({
            query: id => ({
                url: `quotes/${id}`,
                method: 'DELETE',
                body: id
            }), 
            invalidatesTags: ['Quotes'],  
        }),
    })
})

export const {
    useGetQuotesQuery,
    useCreateQuotesMutation,
    useToggleFakeMutation,
    useDeleteQuoteMutation,
} = quotesApi