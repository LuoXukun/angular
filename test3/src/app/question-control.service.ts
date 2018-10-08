/* 将问卷问题转换为FormGroup的服务 */

import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { QuestionBase } from "./question-base";

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFromGroup(questions: QuestionBase<any>[]) {
    let group: any = {};
    questions.forEach(question => {
      group[question.key] = question.required ? 
        new FormControl(question.value || '', Validators.required) :
        new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
