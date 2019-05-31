import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChatComponent } from './components/chat/chat.component';
import { SocketService } from './services/socket.service';
import {ROUTES_MODULE_CHAT} from './chat.routes';
import {SharedModule} from '../../../utils/shared-modules/shared-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTES_MODULE_CHAT,
    SharedModule
  ],
  declarations: [ChatComponent],
  providers: [SocketService]
})
export class ChatModule { }
