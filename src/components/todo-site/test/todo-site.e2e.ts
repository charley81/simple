import { newE2EPage } from '@stencil/core/testing';

describe('todo-site', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-site></todo-site>');

    const element = await page.find('todo-site');
    expect(element).toHaveClass('hydrated');
  });
});
