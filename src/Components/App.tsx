import React from 'react';
import { List } from './Screens/Tasks/List';
import { Add } from './Screens/Tasks/Add';
import { TodoProvider } from '../Providers/Todo';

export const App = () => (
  <TodoProvider>
    <List />
    <Add />
  </TodoProvider>
);
