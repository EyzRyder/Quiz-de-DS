import { Component, OnInit } from '@angular/core';
import { Question5Service } from '../../../question5.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-end5',
  templateUrl: './end5.page.html',
  styleUrls: ['./end5.page.scss'],
})
export class End5Page implements OnInit {

  constructor( private router: Router, private questionService: Question5Service) { }

  ngOnInit() {
  }

}
