import {Component, OnInit} from '@angular/core';
import {ITodo} from '../interfaces';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos: Array<ITodo> = [];

  constructor(private activeRoute: ActivatedRoute) {
    this.todos = this.activeRoute.snapshot.data[0];
  }


  ngOnInit() {
  }

}
