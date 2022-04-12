import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageInterface } from './messages.service';
import { UserInterface } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

  constructor(private _http: HttpClient) { }

  getAllConversations(userId:string): Observable<ConversationInterface[]>{
    return this._http.get<ConversationInterface[]>(`http://localhost:3000/rooms/${userId}`);
  }
  getConversationById(userId:string): Observable<ConversationInterface>{
    return this._http.get<ConversationInterface>(`http://localhost:3000/room/${userId}`);
  }
  getConversationByName(name: string):Observable<ConversationInterface>{
    return this._http.get<ConversationInterface>(`http://localhost:3000/room/${name}`);
  }
}

export interface ConversationInterface{
  _id:string;
  type:string;
  name: string;
  participants: UserInterface[];
  dateCreated: Date;
  messages:MessageInterface[];
  chatImg: string;

}