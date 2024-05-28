import { createSlice } from '@reduxjs/toolkit'


export const quotesSlice = createSlice({
  name: 'quotes',
  initialState: {
    displayAllQuotes: true,
    highlightedQuote: null,
  },
  reducers: {
    toggleVisibility(state) {
      state.displayAllQuotes = !state.displayAllQuotes
    },
    setHighlightedQuote(state, action) {
      if (state.highlightedQuote === action.payload) {
        state.highlightedQuote = null
      } else {
        state.highlightedQuote = action.payload
      }
    },
    editQuoteAuthenticity: (state, action) => {
      let quote = state.quotes.find(td => td.id === action.payload)
      quote.apocryphal = !quote.apocryphal
    }
  }
})

export const {
  setHighlightedQuote,
  toggleVisibility,
  editQuoteAuthenticity
} = quotesSlice.actions

export default quotesSlice.reducer
