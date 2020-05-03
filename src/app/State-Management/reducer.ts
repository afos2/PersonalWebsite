import { createReducer, Action, on, State } from '@ngrx/store'
import * as AppActions from './actions'

export interface AppState {
    firstName: string
    lastName: string
}

export const initialState: AppState = {
    firstName: null,
    lastName: null
}

const appReducer = createReducer(
    initialState,
    on(AppActions.setInitalData, (state, payload) => ({
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName
    }))
)

export function reducer(state: AppState | undefined, action: Action) {
    return appReducer(state, action)
}