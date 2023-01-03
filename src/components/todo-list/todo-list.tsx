import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { Todo } from '../../interfaces/interfaces';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true,
})
export class TodoList {
  @Prop() todos: Todo[];
  @Event() toggleTodo: EventEmitter;

  completedClass(todo: Todo): string {
    return todo.completed ? 'completed' : '';
  }

  handleToggleTodo(todo: Todo) {
    this.toggleTodo.emit(todo);
  }

  render() {
    return (
      <Host>
        <ul>
          {this.todos.map(todo => (
            <li class={this.completedClass(todo)} onClick={this.handleToggleTodo.bind(this, todo)}>
              {todo.task}
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}
