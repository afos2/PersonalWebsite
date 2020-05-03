import { createSelector } from '@ngrx/store';
import { AppState } from './reducer';

export const appState = (state: any) => state.app

export const selectName = createSelector(
    appState,
    (state: AppState) => (state.firstName && state.lastName)? state.firstName + ' ' + state.lastName : null
)

export const selectAboutMe = createSelector(
    appState,
    (state: AppState) => state.aboutData
)