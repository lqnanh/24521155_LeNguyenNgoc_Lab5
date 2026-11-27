import { createContext, useContext, useEffect, useReducer } from 'react'
import { appReducer, initialState } from './appReducer.js'

const AppStateContext = createContext(null)
const AppDispatchContext = createContext(null)

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    document.documentElement.dataset.theme = state.theme
  }, [state.theme])

  return (
    <AppStateContext value={state}>
      <AppDispatchContext value={dispatch}>
        {children}
      </AppDispatchContext>
    </AppStateContext>
  )
}

export function useAppState() {
  const context = useContext(AppStateContext)
  if (context === null) {
    throw new Error('useAppState must be used within an AppProvider')
  }
  return context
}

export function useAppDispatch() {
  const context = useContext(AppDispatchContext)
  if (context === null) {
    throw new Error('useAppDispatch must be used within an AppProvider')
  }
  return context
}
