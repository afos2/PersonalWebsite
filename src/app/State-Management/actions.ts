import { createAction, props} from '@ngrx/store'
import { BaseTypes } from './action-types'

export const getInitalData = createAction(
    BaseTypes.GET_INITAL_DATA
)

export const setInitalData = createAction(
    BaseTypes.SET_INITAL_DATA,
    props<{firstName: string, lastName: string}>()
)