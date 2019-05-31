import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Message } from '../model/message';
import { Event } from '../model/event';

import * as socketIo from 'socket.io-client';

@Injectable()
export class SocketService {

  private socket;

  constructor() {
    this.initSocket();
  }

  public initSocket(): void {
    this.socket = socketIo('http://localhost:3000');
  }

  public send(message: string): void {
    console.log(message);
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }


  // private socketConnection_1 = io('http://localhost:3000');
  //
  // public send(message: string): void {
  //   console.log(message);
  //   this.socketConnection_1.emit('messageFromClient', message);
  // }
  //
  // public onMessage(): Observable<Message> {
  //   return new Observable<Message>(observer => {
  //       this.socketConnection_1.on('messageFromBackend', (data: Message) => observer.next(data));
  //   });
  // }
  //
  // public onEvent(event: Event): Observable<any> {
  //   return new Observable<Event>(observer => {
  //       this.socketConnection_1.on(event, () => observer.next());
  //   });
  // }
}
