import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Jobs } from './pages/jobs/jobs';
import { JobDetails } from './pages/job-details/job-details';

export const routes = [
  { path: '', component: Home },
  { path: 'jobs', component: Jobs },
  { path: 'job/:id', component: JobDetails }
];