import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobListComponent } from './job-list/job-list.component';

export const routes: Routes = [
    
    { 
        path: '',
        component: HomeComponent,
    },
    {
        path: 'jobs', component: JobListComponent
    }
];
