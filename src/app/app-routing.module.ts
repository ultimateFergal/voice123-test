import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/* import { HomeActivator } from 'src/app/services/home/home-route.service';
import { NotFoundComponent } from './components/notFound/notFound.component'; */
import { VoiceActorsListComponent } from './components/voice-actors-list/voice-actors-list.component';

export const routes: Routes = [
/*     { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
    { path: 'home' , loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
     canLoad: [HomeActivator]}, */
    { path: 'VAList', component: VoiceActorsListComponent },
    { path: '', redirectTo: 'VAList', pathMatch: 'full'},

];


@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    // providers: [ HomeActivator ]
})

export class AppRoutingModule { }
