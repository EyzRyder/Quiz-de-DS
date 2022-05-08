import { Component, OnInit } from '@angular/core';
import { Question1Service } from '../../../question1.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-end1',
  templateUrl: './end1.page.html',
  styleUrls: ['./end1.page.scss'],
})
export class End1Page implements OnInit {

  constructor( private router: Router, private questionService: Question1Service) { }

  ngOnInit() {
  }

}
