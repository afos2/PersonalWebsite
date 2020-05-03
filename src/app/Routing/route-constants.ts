import { Routes } from '@angular/router';
import { LandingPageComponent, OnlineResumeComponent } from '../Components';

export const routes: Routes = [ 
    {
        path: '',
        redirectTo: '/about-me',
        pathMatch: 'full'
    },
    {
        path: 'about-me',
        component: LandingPageComponent
    },
    {
        path: 'resume',
        component: OnlineResumeComponent
    }
];