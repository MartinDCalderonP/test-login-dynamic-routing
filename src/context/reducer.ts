type User = {
  email: string
  password: string
}

export type State = {
  user: User | null
}

export const initialState = {
  user: null
}

export type Action = {
  type: string
  payload: {
    email: string
    password: string
  }
}

export const actionTypes = {
  SET_USER: "SET_USER"
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: {
          email: action.payload.email,
          password: action.payload.password
        }
      }
    default:
      return state
  }
}
