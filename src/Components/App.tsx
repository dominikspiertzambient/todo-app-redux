import React from 'react';
import { List } from './Screens/Todo/List';
import { Add } from './Screens/Todo/Add';
import { ModalProvider, ToastProvider, TodoProvider } from '../Providers';

export const App = () => (
  <ModalProvider>
    <ToastProvider>
      <TodoProvider>
        <List />
        <Add />
      </TodoProvider>
    </ToastProvider>
  </ModalProvider>
);
