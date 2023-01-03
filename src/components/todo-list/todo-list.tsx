import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true,
})
export class TodoList {
  render() {
    return (
      <Host>
        <li>todo list item</li>
      </Host>
    );
  }
}
