import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodoService} from '../service/todo.service';
import {ITodo} from '../interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  todo: ITodo = null;

  constructor(private activated: ActivatedRoute, private todoServicce: TodoService) {
    console.log(activated.snapshot.params.id);
  }

  ngOnInit() {
    this.todoServicce.getTodoById(this.activated.snapshot.params.id)
      .subscribe(todo => this.todo = todo);
  }

}
