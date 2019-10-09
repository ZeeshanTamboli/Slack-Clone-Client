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
  const [activeIndex, setIndex] = useState(-1);
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
              <input placeholder="Enter email" />
            </Form.Field>
            <Form.Field>
              <label>Enter the workspace you have been invited to</label>
              <input placeholder="Enter workspace name" />
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
              <input placeholder="Enter email" />
            </Form.Field>
            <Form.Field>
              <label>Enter a new workspace</label>
              <input placeholder="Enter your new workspace name" />
            </Form.Field>
            <FormButton type="submit">Submit</FormButton>
          </Form>
        </Accordion.Content>
      </Accordion>
    </HomePageContainer>
  );
};
