import { Component, OnInit } from '@angular/core';

import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageContent: string;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {

  }

  public sendMessage(message: string): void {
    this.socketService.send(message);
    this.messageContent = null;
  }
}
