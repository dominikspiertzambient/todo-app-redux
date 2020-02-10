import { Button } from 'antd';
import React, { FC, useContext } from 'react';
import { ModalContext, ToastContext, TodoContext } from '../../../../../../Providers';
import { Todo } from '../../../../../../Providers/Todo/Todo';

export const Done: FC<Pick<Todo, 'title'>> = ({ title }) => {
  const { showModal } = useContext(ModalContext);
  const { setTodos, todos } = useContext(TodoContext);
  const { showToast } = useContext(ToastContext);

  const removeTodo = () => {
    const updatedTodos: Todo[] = todos.filter(({ title: todoTitle }) => todoTitle !== title);
    showToast({ type: 'success', message: 'Todo entfernt', description: `Das Todo "${title}" wurde entfernt.` });
    setTodos(updatedTodos);
  };

  return (
    <Button
      type='primary'
      onClick={() =>
        showModal({
          title: 'Todo entfernen',
          content: `Bist du sicher, dass du das Todo "${title}" entfernen möchtest?`,
          onOk: removeTodo,
        })
      }
    >
      Als erledigt markieren
    </Button>
  );
};
