import React, { useState } from 'react';
import { Accordion, Icon, Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { colorPrimary } from '../../common/styles/colors';

const HomePageContainer = styled.div`
  position: absolute;
  width: 35rem;
  height: 18.75rem;
  top: 50%;
  left: 50%;
  margin-left: -18.75rem;
  margin-top: -9.375rem;
`;

const FormButton = styled(Button)({
  backgroundColor: `${colorPrimary} !important`,
  color: 'white !important'
});

export const HomePage: React.FC = () => {
  const [activeIndex, setIndex] = useState<number>(-1);

  interface InitialState {
    existingEmail: string;
    existingWorkspace: string;
    newEmail: string;
    newWorkspace: string;
  }

  const workspaceValues: InitialState = {
    existingEmail: '',
    existingWorkspace: '',
    newEmail: '',
    newWorkspace: ''
  };

  const [values, setValues] = useState<InitialState>(workspaceValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(setValues({ ...values, [e.target.name]: e.target.value }));
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <HomePageContainer>
      <h1 style={{ textAlign: 'center' }}>Slack Clone</h1>
      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={() => setIndex(activeIndex === 0 ? -1 : 0)}
          style={{ color: 'black' }}
        >
          <Icon name="dropdown" />
          Join Workspace
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Form>
            <Form.Field>
              <label>Enter the email you had been invited on</label>
              <input
                name="existingEmail"
                type="email"
                placeholder="Enter email"
                onChange={handleInputChange}
                value={values.existingEmail}
              />
            </Form.Field>
            <Form.Field>
              <label>Enter the workspace you have been invited to</label>
              <input
                name="existingWorkspace"
                placeholder="Enter workspace name"
                onChange={handleInputChange}
                value={values.existingWorkspace}
              />
            </Form.Field>
            <FormButton type="submit">Submit</FormButton>
          </Form>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={() => setIndex(activeIndex === 1 ? -1 : 1)}
          style={{ color: 'black' }}
        >
          <Icon name="dropdown" />
          Create a new Workspace
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <Form>
            <Form.Field>
              <label>Enter an email</label>
              <input
                name="newEmail"
                type="email"
                placeholder="Enter email"
                onChange={handleInputChange}
                value={values.newEmail}
              />
            </Form.Field>
            <Form.Field>
              <label>Enter a new workspace</label>
              <input
                name="newWorkspace"
                placeholder="Enter your new workspace name"
                onChange={handleInputChange}
                value={values.newWorkspace}
              />
            </Form.Field>
            <FormButton type="submit">Submit</FormButton>
          </Form>
        </Accordion.Content>
      </Accordion>
    </HomePageContainer>
  );
};
