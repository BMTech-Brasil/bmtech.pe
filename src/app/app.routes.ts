import { Routes } from '@angular/router'
import { HomeComponent } from './features/home/home.component';
import { TeramindComponent } from './features/solutions/teramind/teramind.component';
import { VmcComponent } from './features/solutions/vmc/vmc.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'solutions/teramind', component: TeramindComponent },
    { path: 'solutions/vmc', component: VmcComponent}
];
