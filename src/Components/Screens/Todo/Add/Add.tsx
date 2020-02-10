import { ToastContext, TodoContext } from '../../../../Providers';
import React, { ChangeEvent, FC, useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Todo } from '../../../../Providers/Todo/Todo';

interface Fields {
  body?: string;
  title?: string;
}

export const Add: FC = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const { showToast } = useContext(ToastContext);
  const [fields, setFields] = useState<Fields>();

  const handleClick = () => {
    if (fields?.body && fields.title) {
      const alreadyExistingTodo = todos.find(({ title }) => title === fields.title);

      if (!alreadyExistingTodo) {
        const updatedTodos: Todo[] = [...todos, { title: fields.title, body: fields.body }];
        showToast({
          type: 'success',
          message: 'Todo hinzugefügt',
          description: `Das Todo "${fields.title}" wurde hinzugefügt.`,
        });
        setTodos(updatedTodos);
      } else {
        showToast({
          type: 'error',
          message: 'Todo existiert bereits',
          description: `Ein Todo mit dem Namen "${fields.title}" befindet sich bereits in der Liste. Bitte wähle einen anderen Namen.`,
        });
      }
    }
  };

  const handleFieldChange = (changeEvent: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string) => {
    const {
      target: { value },
    } = changeEvent;
    const updatedFields: Fields = { ...fields, [fieldName]: value };
    setFields(updatedFields);
  };

  return (
    <div className='container'>
      <h3>Neues Todo erstellen</h3>
      <Form>
        <Form.Item label='Titel'>
          <Input onChange={e => handleFieldChange(e, 'title')} />
        </Form.Item>
        <Form.Item label='Text'>
          <Input.TextArea onChange={e => handleFieldChange(e, 'body')} />
        </Form.Item>
        <Button type='primary' htmlType='submit' onClick={handleClick} disabled={!fields?.body || !fields?.title}>
          Todo erstellen
        </Button>
      </Form>
    </div>
  );
};
