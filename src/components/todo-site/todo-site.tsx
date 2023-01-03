import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'todo-site',
  styleUrl: 'todo-site.css',
  shadow: true,
})
export class TodoSite {
  render() {
    return (
      <Host>
        <h1>todo site</h1>
      </Host>
    );
  }
}
