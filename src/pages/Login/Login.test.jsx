/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import { UserContextProvider } from '../../context/UserContext';

describe('<Login />', () => {
  it('Ao clicar no botão, o modal de login deve ser exibido.', () => {
    render(
      <UserContextProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </UserContextProvider>,
    );

    const view = screen.getByText('CodeLeap');
    userEvent.click(view);
    const texto = screen.getByText('Welcome to CodeLeap network!');
    expect(texto).toBeInTheDocument();
  });

  it('O botão de login deve está desabilitado caso o input esteja vazio.', () => {
    render(
      <UserContextProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </UserContextProvider>,
    );

    const view = screen.getByText('CodeLeap');
    userEvent.click(view);
    const input = screen.getByPlaceholderText('Enter your username');
    userEvent.type(input, '');
    const btn = screen.getByRole('button', { name: /ENTER/i });
    expect(btn).toBeDisabled();
  });

  it('O botão de login deve está habilitado quando o usuário digitar algum valor.', () => {
    render(
      <UserContextProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </UserContextProvider>,
    );

    const view = screen.getByText('CodeLeap');
    userEvent.click(view);
    const input = screen.getByPlaceholderText('Enter your username');
    userEvent.type(input, 'CodeLeap');
    const btn = screen.getByRole('button', { name: /ENTER/i });
    expect(btn).not.toBeDisabled();
  });
});
