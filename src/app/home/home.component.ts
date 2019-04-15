import { Component, OnInit } from '@angular/core';
import {ITodo} from '../interfaces';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos: Array<ITodo> = [];

  constructor(private activeRoute: ActivatedRoute) {
    this.todos = this.activeRoute.snapshot.data[0];
  }

  ngOnInit() {
  }

}
