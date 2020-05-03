import { Routes } from '@angular/router';
import { LandingPageComponent, OnlineResumeComponent } from '../Components';
import { LandingPageGuard } from './DataGuards/LandingPageGuard';

export const routes: Routes = [ 
    {
        path: '',
        redirectTo: '/about-me',
        pathMatch: 'full'
    },
    {
        path: 'about-me',
        component: LandingPageComponent,
        canActivate: [LandingPageGuard]
    },
    {
        path: 'resume',
        component: OnlineResumeComponent
    }
];