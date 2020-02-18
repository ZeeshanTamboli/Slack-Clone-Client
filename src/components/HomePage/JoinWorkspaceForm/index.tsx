import React from 'react';
import { FormikProps, withFormik } from 'formik';
import { Accordion, Icon, Form, FormButton } from 'semantic-ui-react';

interface JoinWorkspaceFormValues {
  existingEmail: string;
  existingWorkspace: string;
}
interface OtherProps {
  activeIndex: number;
  setIndex: (activeIndex: number) => void;
}

const JoinWorkspace = (
  props: OtherProps & FormikProps<JoinWorkspaceFormValues>
) => {
  const { handleSubmit, handleChange, values, activeIndex, setIndex } = props;

  return (
    <>
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
        <Form onSubmit={handleSubmit}>
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
    </>
  );
};

interface MyFormProps {
  existingEmail?: string;
  existingWorkspace?: string;
  activeIndex: number;
  setIndex: (activeIndex: number) => void;
}

export const JoinWorkspaceForm = withFormik<
  MyFormProps,
  JoinWorkspaceFormValues
>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      existingEmail: props.existingEmail || '',
      existingWorkspace: props.existingWorkspace || ''
    };
  },

  handleSubmit: values => {
    //   do submitting things
    console.log('abc');
  }
})(JoinWorkspace);
