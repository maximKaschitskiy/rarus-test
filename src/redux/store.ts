import { configureStore } from "@reduxjs/toolkit"
import { historyReducer } from "./slices/history"
import { uiReducer } from "./slices/ui"

const store = configureStore({
  reducer: {
    history: historyReducer,
    ui: uiReducer
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch }
export { store }