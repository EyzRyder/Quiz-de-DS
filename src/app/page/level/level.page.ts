import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss'],
})
export class LevelPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  q1(){
    this.router.navigate(['etim']);
  }
  q2(){
    this.router.navigate(['about']);
  }
  q3(){
    this.router.navigate(['about']);
  }
  q4(){
    this.router.navigate(['about']);
  }
  q5(){
    this.router.navigate(['about']);
  }
  q6(){
    this.router.navigate(['about']);
  }
  q7(){
    this.router.navigate(['about']);
  }
  q8(){
    this.router.navigate(['about']);
  }
  q9(){
    this.router.navigate(['about']);
  }
  q10(){
    this.router.navigate(['about']);
  }
}
