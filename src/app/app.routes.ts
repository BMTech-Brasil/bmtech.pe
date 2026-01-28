import { Routes } from '@angular/router'
import { HomeComponent } from './features/home/home.component';
import { TeramindComponent } from './features/solutions/teramind/teramind.component';
import { VmcComponent } from './features/solutions/vmc/vmc.component';
import { PortalFlexComponent } from './features/solutions/portal-flex/portal-flex.component';
import { CloudRiskComponent } from './features/solutions/cloud-risk/cloud-risk.components';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'solutions/teramind', component: TeramindComponent },
    { path: 'solutions/vmc', component: VmcComponent },
    { path: 'solutions/portal-flex', component: PortalFlexComponent },
    { path: 'solutions/cloud-risk', component: CloudRiskComponent }
];
