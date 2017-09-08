/*
 * app.routing.ts
 */

import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { MembersComponent } from './members/members.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { AUTH_ROUTES } from './auth/auth.routes'

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
    {path: 'messages', component: MessagesComponent},
    {path: 'members', component: MembersComponent},
    {path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

