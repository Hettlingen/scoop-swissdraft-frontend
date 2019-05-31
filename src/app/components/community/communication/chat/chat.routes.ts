import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {ChatComponent} from './components/chat/chat.component';


export const ROUTES_CONFIG_CHAT: Routes = [
    { path: 'chat',
      component: ChatComponent },
];

export const ROUTES_MODULE_CHAT: ModuleWithProviders = RouterModule.forChild(ROUTES_CONFIG_CHAT);

