import { Routes } from '@angular/router';
import { LandingPageComponent, OnlineResumeComponent } from '../Components';
import { LandingPageGuard } from './DataGuards/LandingPageGuard';
import { AboutMeGuard } from './DataGuards/AboutMeGuard';

export const routes: Routes = [ 
    {
        path: '',
        redirectTo: '/about-me',
        pathMatch: 'full',
    },
    {
        path: 'about-me',
        component: LandingPageComponent,
        canActivate: [LandingPageGuard, AboutMeGuard]
    },
    {
        path: 'resume',
        component: OnlineResumeComponent
    }
];