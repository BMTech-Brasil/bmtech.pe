import { Routes } from '@angular/router'
import { HomeComponent } from './features/home/home.component';
import { TeramindComponent } from './features/solutions/teramind/teramind.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'solutions/teramind', component: TeramindComponent }
];
