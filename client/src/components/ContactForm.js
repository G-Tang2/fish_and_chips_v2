import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const formSchema = Yup.object().shape({
  name: Yup.string().max(50, "Name is too long. (50 character limit)").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

export default () => {
  /* Server State Handling */
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/xvowdbnl",
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Thank you for your message, we will get back to you shortly.");
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <section className="main-wrapper contact-wrapper">
      <Grid container className="contact-container">
        <Grid item xs={12} className="contact-text">
          <h1 className="heading">Contact Us</h1>
          <p>Have a question or feedback? We'd love to hear it.</p>
        </Grid>
        <Grid item xs={12}>
          <Formik initialValues={{ name: "", email: "", message: "" }} onSubmit={handleOnSubmit} validationSchema={formSchema} validateOnChange={false} validateOnBlur={false}>
            {({ isSubmitting }) => (
              <Form id="fs-frm" noValidate>
                <Grid container spacing={4} className="form-container">
                  <Grid item xs={6} className="form-item-container">
                    <label htmlFor="name">Name:</label>
                    <Field className="input-area" id="name" type="name" name="name" />
                    <ErrorMessage name="name" className="errorMsg" component="p" />
                  </Grid>
                  <Grid item xs={6} className="form-item-container">
                    <label htmlFor="email">Email:</label>
                    <Field className="input-area" id="email" type="email" name="email" />
                    <ErrorMessage name="email" className="errorMsg" component="p" />
                  </Grid>
                  <Grid item xs={12} className="form-item-container">
                    <label htmlFor="message">Message:</label>
                    <Field className="input-area resizable-container" id="message" name="message" component="textarea" />
                    <ErrorMessage name="message" className="errorMsg" component="p" />
                  </Grid>
                </Grid>
                <Button className="submit-button" type="submit" variant="outlined" color="default" disabled={isSubmitting}>
                  Submit
                </Button>
                {serverState && <p className={!serverState.ok ? "errorMsg" : "successMsg"}>{serverState.msg}</p>}
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </section>
  );
};
