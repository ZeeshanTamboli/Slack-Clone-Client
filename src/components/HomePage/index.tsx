import React, { useState } from 'react';
import { Accordion, Icon, Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { colorPrimary } from '../../common/styles/colors';
import { FormikProps, withFormik, FormikErrors } from 'formik';
import { RouteComponentProps } from 'react-router-dom';

const HomePageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  /* source: http://www.brandgradients.com/slack-colors/ */
  background: linear-gradient(-120deg, #3eb991, #6ecadc, #e9a820, #e01563);
`;

const FormButton = styled(Button)({
  backgroundColor: `${colorPrimary} !important`,
  color: 'white !important'
});

interface JoinWorkspaceFormValues {
  existingWorkspace: string;
  existingEmail: string;
}

interface CreateWorkspaceFormValues {
  email: string;
  workspace: string;
  firstName: string;
  lastName: string;
}

type FormValues = JoinWorkspaceFormValues & CreateWorkspaceFormValues;

const HomePageForm = (props: {} & FormikProps<FormValues>) => {
  const [activeIndex, setIndex] = useState<number>(-1);

  const { handleChange, handleSubmit, errors, values } = props;

  return (
    <HomePageStyled>
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
                onChange={handleChange}
                value={values.existingEmail}
              />
            </Form.Field>
            <Form.Field>
              <label>Enter the workspace you have been invited to</label>
              <input
                name="existingWorkspace"
                placeholder="Enter workspace name"
                onChange={handleChange}
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
              <label>Enter first name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter first name"
                onChange={handleChange}
                value={values.firstName}
              />
            </Form.Field>
            <Form.Field>
              <label>Enter last name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter last name"
                onChange={handleChange}
                value={values.lastName}
              />
            </Form.Field>
            <Form.Field>
              <label>Enter an email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
                value={values.email}
              />
            </Form.Field>
            <Form.Field>
              <label>Enter a new workspace</label>
              <input
                name="workspace"
                placeholder="Enter your new workspace name"
                onChange={handleChange}
                value={values.workspace}
              />
            </Form.Field>
            <FormButton type="submit">Submit</FormButton>
          </Form>
        </Accordion.Content>
      </Accordion>
    </HomePageStyled>
  );
};

interface FormErrors {
  firstName: string;
}

export const HomePage = () =>
  withFormik<{}, FormValues>({
    validate: (values: FormValues) => {
      let errors: FormikErrors<FormErrors> = {};
      if (!values.firstName) {
        errors.firstName = 'Required';
      }
      return errors;
    },
    handleSubmit: () => {}
  })(HomePageForm);
