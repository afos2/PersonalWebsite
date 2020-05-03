import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import  * as AppActions from './actions';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions) {}

    getInitalData$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.getInitalData),
        switchMap(() => of(AppActions.setInitalData({firstName: 'Alan', lastName: 'Fos'})))
    ))
}