import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UIType } from '../../types'

  const initialState: UIType = {
    input: '',
    typeing: false,
    scrollBottom: true
  }

  const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
      setInput(state, action: PayloadAction<UIType['input']>) {
        return {...state, input: action.payload};
      },
      setTypeing(state, action: PayloadAction<UIType['typeing']>) {
        return {...state, typeing: action.payload};
      },
      setScrollBottom(state, action: PayloadAction<UIType['scrollBottom']>) {
        return {...state, scrollBottom: action.payload};
      },
    },
  })
  
const { setInput, setTypeing, setScrollBottom } = uiSlice.actions

const uiReducer = uiSlice.reducer

export { setInput, setTypeing, setScrollBottom, uiReducer }