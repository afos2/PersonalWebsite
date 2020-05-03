import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AppActions from '../../State-Management/actions'

@Injectable({
  providedIn: 'root'
})
export class LandingPageGuard implements CanActivate {

    constructor(private store: Store<any>) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        this.store.dispatch(AppActions.getInitalData())
        return true;
    }
}