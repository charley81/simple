import { newSpecPage } from '@stencil/core/testing';
import { TodoForm } from '../todo-form';

describe('todo-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TodoForm],
      html: `<todo-form></todo-form>`,
    });
    expect(page.root).toEqualHtml(`
      <todo-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </todo-form>
    `);
  });
});
