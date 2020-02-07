import {TasksContext} from '../../../../Providers';
import React, {ChangeEvent, FC, useContext, useState} from 'react';
import {Button, Form, Input} from 'antd';
import {Task} from '../../../../Providers/Tasks/Tasks';

interface Fields {
  title?: string;
  text?: string;
}

export const Add: FC = () => {
  const {tasks, setTasks} = useContext(TasksContext);
  const [fields, setFields] = useState<Fields>();

  const handleClick = () => {
    if(fields?.text && fields.title) {
      const updatedTasks: Task[] = [...tasks, { title: fields.title, body: fields.text }];
      setTasks(updatedTasks);
    }
  };

  const handleFieldChange = (changeEvent: ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const { target: { value } } = changeEvent;
    const updatedFields: Fields = { ...fields, [fieldName]: value };
    setFields(updatedFields);
  };

  return (
    <>
    <h3>Neues Todo erstellen</h3>
    <Form>
      <Form.Item label="Titel">
        <Input onChange={(e) => handleFieldChange(e, 'title')} />
      </Form.Item>
      <Form.Item label="Text">
        <Input onChange={(e) => handleFieldChange(e, 'text')} />
      </Form.Item>
      <Button type="primary" htmlType="submit" onClick={handleClick}>
        Todo erstellen
      </Button>
    </Form>
      </>
  );
}
