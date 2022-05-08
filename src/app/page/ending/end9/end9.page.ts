import { Component, OnInit } from '@angular/core';
import { Question9Service } from '../../../question9.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-end9',
  templateUrl: './end9.page.html',
  styleUrls: ['./end9.page.scss'],
})
export class End9Page implements OnInit {

  constructor( private router: Router, private questionService: Question9Service) { }

  ngOnInit() {
  }

}
