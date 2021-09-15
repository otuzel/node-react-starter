import { render } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header Component', () => {
  it('should render title', () => {
    let { getByText } = render(<Header />, { wrapper: MemoryRouter });
    // just an example
    expect(getByText('Node React Starter')).toBeTruthy();
  });
});
