import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Answer } from '../model/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http : HttpClient) { }

  create(answer : Answer):Observable<Answer>{
    return this.http.post<Answer>(`http://localhost:3001/answers`, answer);
  }

  read(id : number): Observable<Answer>{
    return this.http.get<Answer>(`http://localhost:3001/answers?idQuestion=${id}`);
  }

  getAll():Observable<Answer[]>{
    return this.http.get<Answer[]>(`http://localhost:3001/answers`);
  }

  update(answer : Answer): Observable<Answer>{
    return this.http.put<Answer>(`http://localhost:3001${answer.id}`, answer);
  }

  delete(id : number): Observable<Answer>{
    return this.http.delete<Answer>(`http://localhost:3001/${id}`, );
  }

}
