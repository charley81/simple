import { Component, Host, h, State, Listen } from '@stencil/core';
import { Todo } from '../../interfaces/interfaces';

@Component({
  tag: 'todo-site',
  styleUrl: 'todo-site.css',
  shadow: true,
})
export class TodoSite {
  @State() todos: Todo[] = [
    { task: 'Cook', completed: false },
    { task: 'Dance', completed: true },
    { task: 'Eat', completed: false },
  ];

  @Listen('toggleTodo')
  toggleTodo(e): void {
    const todo = e.detail;
    this.todos = this.todos.map(x => {
      if (x.task === todo.task) {
        const updated = {
          task: x.task,
          completed: !x.completed,
        };
        return updated;
      }
      return x;
    });
  }

  @Listen('newTodo')
  newTodo(e) {
    const newTodo = {
      task: e.detail,
      completed: false,
    };
    this.todos = [...this.todos, newTodo];
  }

  render() {
    return (
      <Host>
        <nav>
          <div>
            <h2>simple</h2>
          </div>
        </nav>
        <header>
          <todo-form></todo-form>
        </header>
        <main>
          <todo-list todos={this.todos}></todo-list>
        </main>
      </Host>
    );
  }
}
