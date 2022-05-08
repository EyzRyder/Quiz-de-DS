import { Component, OnInit } from '@angular/core';
import { Question7Service } from '../../../question7.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end7',
  templateUrl: './end7.page.html',
  styleUrls: ['./end7.page.scss'],
})
export class End7Page implements OnInit {

  constructor( private router: Router, private questionService: Question7Service) { }

  ngOnInit() {
  }

}
