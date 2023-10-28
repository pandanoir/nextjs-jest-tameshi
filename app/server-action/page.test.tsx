/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Page from './page';
jest.spyOn(window, 'alert').mockImplementation(() => {});

test('server action', async () => {
  render(<Page />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'bob' } });
  screen.getByRole('button').click();

  await waitFor(() => expect(alert).toBeCalledWith('Hello bob'));
});
