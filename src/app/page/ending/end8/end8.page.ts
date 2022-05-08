import { Component, OnInit } from '@angular/core';
import { Question8Service } from '../../../question8.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-end8',
  templateUrl: './end8.page.html',
  styleUrls: ['./end8.page.scss'],
})
export class End8Page implements OnInit {

  constructor( private router: Router, private questionService: Question8Service) { }

  ngOnInit() {
  }

}
