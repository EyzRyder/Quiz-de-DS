import { Component, OnInit } from '@angular/core';
import { Question2Service } from '../../../question2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end2',
  templateUrl: './end2.page.html',
  styleUrls: ['./end2.page.scss'],
})
export class End2Page implements OnInit {

  constructor( private router: Router, private questionService: Question2Service) { }

  ngOnInit() {
  }

}
