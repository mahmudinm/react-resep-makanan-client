import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput } from "components/Formik/TextInput";
import { Spinner } from 'reactstrap';

const LoginForm = ({ handleLogin }) => {

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .required('Required')
      })}
      onSubmit={(data, actions) => {
        handleLogin(data, actions);
      }}
    >
      {formik => (
        <Form>
          <TextInput 
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <TextInput 
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          {formik.status ? <div className="alert alert-danger">{formik.status}</div> : null}
          <button type="submit" className="btn btn-primary btn-block" disabled={formik.isSubmitting}>
            LOGIN
          </button>
        </Form>
      )}
    </Formik>

  )

}

export default LoginForm;