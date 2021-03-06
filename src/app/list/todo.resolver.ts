import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ITodo} from '../interfaces';
import {TodoService} from '../service/todo.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<ITodo[]> {
  constructor(private todoService: TodoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.todoService.getTodos()
      .pipe(tap(todo => todo));
  }
}
