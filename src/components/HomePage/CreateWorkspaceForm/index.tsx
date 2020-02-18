import React from 'react';
import { Accordion, Icon, Form, FormButton } from 'semantic-ui-react';
import { FormikProps, withFormik } from 'formik';

interface CreateWorkspaceFormValues {
  email: string;
  workspace: string;
  firstName: string;
  lastName: string;
}

interface OtherProps {
  activeIndex: number;
  setIndex: (activeIndex: number) => void;
}

const CreateWorkspace = (
  props: OtherProps & FormikProps<CreateWorkspaceFormValues>
) => {
  const { handleSubmit, handleChange, values, activeIndex, setIndex } = props;

  return (
    <>
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
        <Form onSubmit={handleSubmit}>
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
    </>
  );
};

interface MyFormProps {
  initialEmail?: string;
  initialWorkspace?: string;
  intialFirstName?: string;
  initialLastName?: string;
  activeIndex: number;
  setIndex: (activeIndex: number) => void;
}

// Wrap our form with the withFormik HoC
export const CreateWorkspaceForm = withFormik<
  MyFormProps,
  CreateWorkspaceFormValues
>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      workspace: props.initialWorkspace || '',
      firstName: props.intialFirstName || '',
      lastName: props.initialLastName || ''
    };
  },

  handleSubmit: values => {
    //   do submitting things
    console.log('abc');
  }
})(CreateWorkspace);
