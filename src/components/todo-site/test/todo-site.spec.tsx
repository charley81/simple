import { newSpecPage } from '@stencil/core/testing';
import { TodoSite } from '../todo-site';

describe('todo-site', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TodoSite],
      html: `<todo-site></todo-site>`,
    });
    expect(page.root).toEqualHtml(`
      <todo-site>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </todo-site>
    `);
  });
});
