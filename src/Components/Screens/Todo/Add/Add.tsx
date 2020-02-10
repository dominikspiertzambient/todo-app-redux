import { TodoContext } from '../../../../Providers';
import React, { ChangeEvent, FC, useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Todo } from '../../../../Providers/Todo/Todo';

interface Fields {
  body?: string;
  title?: string;
}

export const Add: FC = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [fields, setFields] = useState<Fields>();

  const handleClick = () => {
    if (fields?.body && fields.title) {
      const updatedTodos: Todo[] = [...todos, { title: fields.title, body: fields.body }];
      setTodos(updatedTodos);
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
