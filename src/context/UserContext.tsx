import React, { createContext, ReactNode, useContext, useReducer } from "react"
import { reducer, State, initialState, Action } from "./reducer"

type Context = {
  state: State
  dispatch: (action: Action) => void
}

const UserContext = createContext<Context>({} as Context)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) throw new Error("useUser must be used within a UserProvider")

  return context
}
