import { createReducer, Action, on, State } from '@ngrx/store'
import * as AppActions from './actions'
import { AboutData } from '../Models/AboutData'

export interface AppState {
    firstName: string
    lastName: string
    aboutData: Array<AboutData>
}

export const initialState: AppState = {
    firstName: null,
    lastName: null,
    aboutData: null
}

const appReducer = createReducer(
    initialState,
    on(AppActions.setInitalData, (state, payload) => ({
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName
    })),
    on(AppActions.setAboutMeData, (state, payload) => ({
        ...state,
        aboutData: [...payload.payload]
    }))
)

export function reducer(state: AppState | undefined, action: Action) {
    return appReducer(state, action)
}