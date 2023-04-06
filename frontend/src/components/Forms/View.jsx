import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const FormView = (props) => {
  return (
    <Form className="block Forms">
      <Form.Field required className="field">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Insira seu nome..."
        />
      </Form.Field>
      <Form.Field className="field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Insira seu email..."
        />
      </Form.Field>
      <Form.Field required className="field">
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Insira a sua mensagem..."
        />
      </Form.Field>
      <Form.Field required className="field">
        <Checkbox label="Concordo com os termos de uso" />
      </Form.Field>
      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default FormView;
