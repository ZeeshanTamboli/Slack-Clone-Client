import React from "react";
import { Accordion, Icon, Form } from "semantic-ui-react";
import { FormikProps, withFormik } from "formik";
import axios from "axios";
import { FormButton, StyledErrorMessage } from "./styles";
import * as Yup from "yup";
import { URL_CREATE_USER_WORKSPACE } from "../../../api/endpoints";

export interface CreateWorkspaceFormValues {
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
  const {
    handleChange,
    values,
    activeIndex,
    setIndex,
    errors,
    touched,
    handleSubmit,
    isSubmitting
  } = props;

  return (
    <>
      <Accordion.Title
        active={activeIndex === 1}
        index={1}
        onClick={() => setIndex(activeIndex === 1 ? -1 : 1)}
        style={{ color: "black" }}
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
            {errors.firstName && touched.firstName && (
              <StyledErrorMessage>{errors.firstName}</StyledErrorMessage>
            )}
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
            {errors.lastName && touched.lastName && (
              <StyledErrorMessage>{errors.lastName}</StyledErrorMessage>
            )}
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
            {errors.email && touched.email && (
              <StyledErrorMessage>{errors.email}</StyledErrorMessage>
            )}
          </Form.Field>
          <Form.Field>
            <label>Enter a new workspace</label>
            <input
              name="workspace"
              placeholder="Enter your new workspace name"
              onChange={handleChange}
              value={values.workspace}
            />
            {errors.workspace && touched.workspace && (
              <StyledErrorMessage>{errors.workspace}</StyledErrorMessage>
            )}
          </Form.Field>
          <FormButton
            loading={isSubmitting}
            disabled={isSubmitting}
            type="submit"
          >
            Submit
          </FormButton>
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
      email: props.initialEmail || "",
      workspace: props.initialWorkspace || "",
      firstName: props.intialFirstName || "",
      lastName: props.initialLastName || ""
    };
  },

  validationSchema: Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    workspace: Yup.string().required("Required")
  }),
  handleSubmit: async (values: CreateWorkspaceFormValues, { resetForm }) => {
    try {
      const { data } = await axios.post(URL_CREATE_USER_WORKSPACE, values, {
        headers: { "Content-Type": "application/json" }
      });
      if (data.success) {
        resetForm();
      }
    } catch (error) {}
  }
})(CreateWorkspace);
