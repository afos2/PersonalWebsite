import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import  * as AppActions from './actions';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {meData} from './Data/about-me-data'

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions) {}

    getInitalData$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.getInitalData),
        switchMap(() => of(AppActions.setInitalData({firstName: 'Alan', lastName: 'Fos'})))
    ))

    getAboutMeData$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.getAboutMeData),
        switchMap(() => of(AppActions.setAboutMeData({payload: meData})))
    ))
}