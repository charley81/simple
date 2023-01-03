import { Component, Host, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'todo-form',
  styleUrl: 'todo-form.css',
  shadow: true,
})
export class TodoForm {
  @Event() newTodo: EventEmitter;
  @State() todo: string;

  handleChange(e) {
    this.todo = (e.target as HTMLTextAreaElement).value;
  }

  handleNewTodo() {
    this.newTodo.emit(this.todo);
    this.todo = '';
  }

  render() {
    return (
      <Host>
        <input type="text" class="form-input" placeholder="new task" value={this.todo} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleNewTodo.bind(this)}>add</button>
      </Host>
    );
  }
}
