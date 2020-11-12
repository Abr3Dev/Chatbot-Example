import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/model/answer';
import { Question } from 'src/app/model/question';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-create-sentence',
  templateUrl: './create-sentence.component.html',
  styleUrls: ['./create-sentence.component.css']
})



export class CreateSentenceComponent implements OnInit {

  question : Question;
  answer : Answer
  questionString : string
  answerString : string;
  answers : Answer[];
  questions : Question[];

  constructor(private answerService : AnswerService, private questionService : QuestionService) { }

  ngOnInit(): void {

    this.question  = new Question();
    this.answer = new Answer();
    this.answerService.getAll()
    .subscribe(resp =>{
      this.answers = resp
    })
    this.questionService.getAll()
    .subscribe(resp =>{
      this.questions = resp
    })
  }

  createSentence(){
    this.questionService.create(this.question)
    .subscribe(resp =>{
      this.answer.idQuestion = resp.id;
      this.answerService.create(this.answer)
      .subscribe(resp =>{
      })
    })
  }

}
