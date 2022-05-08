import { Component, OnInit } from '@angular/core';
import { Question4Service } from '../../../question4.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-end4',
  templateUrl: './end4.page.html',
  styleUrls: ['./end4.page.scss'],
})
export class End4Page implements OnInit {

  constructor( private router: Router, private questionService: Question4Service) { }

  ngOnInit() {
  }

}
