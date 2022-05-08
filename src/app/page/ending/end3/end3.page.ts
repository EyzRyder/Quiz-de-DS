import { Component, OnInit } from '@angular/core';
import { Question3Service } from '../../../question3.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-end3',
  templateUrl: './end3.page.html',
  styleUrls: ['./end3.page.scss'],
})
export class End3Page implements OnInit {

  constructor( private router: Router, private questionService: Question3Service) { }

  ngOnInit() {
  }

}
