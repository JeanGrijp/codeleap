/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from '../../context/UserContext';
import Dashboard from './Dashboard';
import Login from '../Login/Login';

describe('<Dashboard />', () => {
  it('Ao ser direcionado para o dashboard, o username deve ser exibido na parte superior da tela', () => {
    render(
      <UserContextProvider>
        <BrowserRouter>
          <Login />
          <Dashboard />
        </BrowserRouter>
      </UserContextProvider>,
    );

    const view = screen.getByText('CodeLeap');
    userEvent.click(view);
    const input = screen.getByPlaceholderText('Enter your username');
    userEvent.type(input, 'Jean');
    const btn = screen.getByRole('button', { name: /ENTER/i });
    userEvent.click(btn);

    const name = screen.getByText('Olá Jean 😊');
    expect(name).toBeInTheDocument();
  });

  it(
    'Se o input title e o input content da criação de um novo post estiver vazios, o botão CREATE deverá está desabilitado',
    () => {
      render(
        <UserContextProvider>
          <BrowserRouter>
            <Dashboard />
          </BrowserRouter>
        </UserContextProvider>,
      );

      const title = screen.getByPlaceholderText('Hello World');
      const content = screen.getByPlaceholderText('Content here');
      userEvent.type(title, '');
      userEvent.type(content, '');

      const btn = screen.getByRole('button', { name: /CREATE/i });

      expect(btn).toBeDisabled();
    },
  );

  it('O botão de criação do post deve está habilitado quando o usuário inserir algum valor.', () => {
    render(
      <UserContextProvider>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </UserContextProvider>,
    );

    const title = screen.getByPlaceholderText('Hello World');
    const content = screen.getByPlaceholderText('Content here');

    userEvent.type(title, 'React');
    userEvent.type(content, 'React');

    const btn = screen.getByRole('button', { name: /CREATE/i });

    expect(btn).toBeEnabled();
  });

  it('O botão de criação do post deve está habilitado quando o usuário inserir algum valor.', () => {
    render(
      <UserContextProvider>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </UserContextProvider>,
    );

    const title = screen.getByPlaceholderText('Hello World');
    const content = screen.getByPlaceholderText('Content here');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();

    userEvent.type(title, 'React.js');
    userEvent.type(content, 'React Native');

    const btn = screen.getByRole('button', { name: /CREATE/i });

    expect(btn).toBeEnabled();
  });
});
