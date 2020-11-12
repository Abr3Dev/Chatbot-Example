import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/model/answer';
import { Question } from 'src/app/model/question';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  question : Question;
  conversations : Object[]
  answer : Answer;
  questionUser : string;


  constructor(private asnwerService : AnswerService, private questionService : QuestionService) { }

  ngOnInit(): void {
    this.question = new Question();
    this.answer = new Answer();
    this.conversations = ['Faça sua pergunta aqui!', 'Você fez uma pergunta?']
  }

  submit(){
    this.questionService.readByQuestion(this.questionUser)
    .subscribe(resp =>{
      this.question.question = this.questionUser
      this.conversations.push(this.question);
        if(!resp[0]){
          
          this.answer.answer = 'Não entendi sua pergunta';
          this.conversations.push(this.answer)
        }else{
          this.question = resp[0]
          this.asnwerService.read(this.question.id)
          .subscribe(resp =>{
            this.answer = resp[0]
            this.conversations.push(this.answer)
          })
        }

    })
  }
}
