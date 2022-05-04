import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../question.service';


@Component({
  selector: 'app-end',
  templateUrl: './end.page.html',
  styleUrls: ['./end.page.scss'],
})
export class EndPage implements OnInit {

  constructor( private router: Router,
    private questionService: QuestionService,) {}

  ngOnInit() {
  }

}
