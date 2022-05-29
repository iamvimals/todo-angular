import { Component, OnInit } from '@angular/core';
import { FirebasehttpService } from 'src/app/services/firebasehttp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todoItem: string = '';
  todosArray: any[] = [];
  errorMessage: string = '';
  constructor(private firebasehttpService: FirebasehttpService) {}

  ngOnInit(): void {}

  ngOnDestroy() {}

  onAddTodo() {
    if (
      this.todoItem.length &&
      this.todoItem != null &&
      this.todoItem != undefined
    ) {
      let todoInfo = {
        id: Math.ceil(Math.random() * 1000),
        todoTask: this.todoItem,
        showDoneButton: true,
        showRemoveButton: false
      };
      this.todosArray.push(todoInfo);
      this.todoItem = '';
    }
  }

  onDoneTodo(todo: any) {
    todo.showDoneButton = !todo.showDoneButton;
    todo.showRemoveButton = !todo.showRemoveButton;
  }
  onRemoveTodo(index: number) {
    this.todosArray.splice(index, 1);
  }
}
