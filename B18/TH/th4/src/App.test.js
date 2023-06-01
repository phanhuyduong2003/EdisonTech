import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { FetchAPI } from './FetchAPI';
jest.mock('./FetchAPI')
test('Check async component fetch', async () => {
  FetchAPI.mockResolvedValueOnce("Async Testing");
  render(<App />);
  const loading = await screen.findByText('Loading')
  expect(loading).toBeVisible()
  await waitFor(() => expect(loading).not.toBeVisible())
  expect(FetchAPI).toHaveBeenCalledTimes(1)
  const result = screen.getByTestId('data')
  expect(result.textContent).toEqual('Async Testing')
  expect(result.textContent).not.toEqual('Hello World')
});
