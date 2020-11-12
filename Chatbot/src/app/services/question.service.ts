import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }

  create(question : Question):Observable<Question>{
    return this.http.post<Question>(`http://localhost:3001/Questions`, question);
  }

  read(id : number): Observable<Question>{
    return this.http.get<Question>(`http://localhost:3001/Questions?id=${id}`);
  }

  getAll():Observable<Question[]>{
    return this.http.get<Question[]>(`http://localhost:3001/Questions`);
  }

  readByQuestion( question : string): Observable<Question>{
    return this.http.get<Question>(`http://localhost:3001/Questions?question=${question}`);
  }

  update(question : Question): Observable<Question>{
    return this.http.put<Question>(`http://localhost:3001${question.id}`, question);
  }

  delete(id : number): Observable<Question>{
    return this.http.delete<Question>(`http://localhost:3001/${id}`);
  }

}
