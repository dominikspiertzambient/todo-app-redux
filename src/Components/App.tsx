import React from 'react';
import { List } from './Screens/Todo/List';
import { Add } from './Screens/Todo/Add';
import { ModalProvider, TodoProvider } from '../Providers';

export const App = () => (
  <ModalProvider>
    <TodoProvider>
      <List />
      <Add />
    </TodoProvider>
  </ModalProvider>
);
