import { Component, OnInit } from '@angular/core';
import { Question6Service } from '../../../question6.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-end6',
  templateUrl: './end6.page.html',
  styleUrls: ['./end6.page.scss'],
})
export class End6Page implements OnInit {

  constructor( private router: Router, private questionService: Question6Service) { }

  ngOnInit() {
  }

}
