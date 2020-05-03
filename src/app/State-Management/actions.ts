import { createAction, props} from '@ngrx/store'
import { BaseTypes } from './action-types'
import { AboutData } from '../Models/AboutData'

export const getInitalData = createAction(
    BaseTypes.GET_INITAL_DATA
)

export const setInitalData = createAction(
    BaseTypes.SET_INITAL_DATA,
    props<{firstName: string, lastName: string}>()
)

export const getAboutMeData = createAction(
    BaseTypes.GET_ABOUT_ME_DATA
)

export const setAboutMeData = createAction(
    BaseTypes.SET_ABOUT_ME_DATA,
    props<{payload: Array<AboutData>}>()
)