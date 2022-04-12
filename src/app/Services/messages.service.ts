import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private _http: HttpClient) { }

  getAllMessages(): Observable<MessageInterface>{
    return this._http.get<MessageInterface>("http://localhost:3000/user/id")
  }
  sendMessage(message: MessageInterface): Observable<MessageInterface>{
    return this._http.post<MessageInterface>("http://localhost:3000/room/id/message", message);
  }

}

export interface MessageInterface{
  _id: string;
  sender: string;
  recipientId: string;
  dateCreated: Date;
  repliedTo: string;
  roomId:string;

}