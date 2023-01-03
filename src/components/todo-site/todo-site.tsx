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
        <nav>
          <div>
            <h2>simple</h2>
          </div>
        </nav>
        <main>
          <todo-list></todo-list>
        </main>
      </Host>
    );
  }
}
