import { render, screen } from '@testing-library/react';
import UserDetails from './UserDetails';

test('Check render UserDetails', () => {
  const info = {
    username: 'phanhuyduong2003',
    email: 'huyduongphan8@gmail.com',
    phone: '0398774605'
  }
  render(<UserDetails info={info} />)
  const username = screen.queryByTestId('username')
  expect(username).toBeInTheDocument()

  const email = screen.queryByTestId('email')
  expect(email).toBeInTheDocument()
  
  const phone = screen.queryByTestId('phone')
  expect(phone).toBeInTheDocument()
  
  expect(username.textContent).toEqual('phanhuyduong2003')
  expect(email.textContent).toEqual('huyduongphan8@gmail.com')
  expect(phone.textContent).toEqual('0398774605')
});
