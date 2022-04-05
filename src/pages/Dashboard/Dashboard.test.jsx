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
  test('Ao ser direcionado para o dashboard, o username deve ser exibido na parte superior da tela', () => {
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

  test(
    'Se o input title e o input content da criação de um novo post estiver vazios, o botão CREATE deverá está desabilitado',
    () => {
      render(
        <UserContextProvider>
          <BrowserRouter>
            <Dashboard />
          </BrowserRouter>
        </UserContextProvider>,
      );

      const title = screen.getByTestId('title');
      const content = screen.getByTestId('content');
      userEvent.type(title, '');
      userEvent.type(content, '');

      const btn = screen.getByRole('button', { name: /CREATE/i });

      expect(btn).toBeDisabled();
    },
  );

  test('O botão de criação do post deve está habilitado quando o usuário inserir algum valor.', () => {
    render(
      <UserContextProvider>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </UserContextProvider>,
    );

    const title = screen.getByTestId('title');
    const content = screen.getByTestId('content');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();

    userEvent.click(title);

    userEvent.type(title, 'R');

    userEvent.click(content);

    userEvent.type(content, 'R');

    const btn = screen.getByTestId(/CREATE/i);

    expect(btn).toBeEnabled();
  });

  test('O botão de edição do post deverá está habilitado apenas para os posts criado pelo usuário logado.', () => {
    render(
      <UserContextProvider>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </UserContextProvider>,
    );

    const title = screen.getByTestId('title');
    const content = screen.getByTestId('content');

    userEvent.click(title);

    userEvent.type(title, 'R');

    userEvent.click(content);

    userEvent.type(content, 'R');

    const btn = screen.getByTestId(/CREATE/i);

    userEvent.click(btn);

    const user = screen.getByTestId('userName');
    expect(user).toBeInTheDocument();

    const postButton = screen.getByTestId('userNamePost');
    expect(postButton).toBeVisible();

    const btnEdit = screen.getByTestId(editModalPostButton);
    expect(btnEdit).toBeVisible();
  });
});
