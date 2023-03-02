import React from 'react'

import {Button, Form, Row, Col, InputGroup} from 'react-bootstrap'
import {Formik} from 'formik'

const EditModal = ({ patient, handleFormSubmit, handleClose }) => {
  return (
    <Formik
      onSubmit={async (values, { setSubmitting }) => {
        let newVal = patient;
        newVal.name = values.name
        newVal.email = values.email
        newVal.address.street = values.street
        newVal.address.city = values.city
        newVal.address.state = values.state
        newVal.address.pincode= values.zip
        newVal.phoneNo = values.phone
        await handleFormSubmit(patient._id, newVal)
        handleClose()
        setSubmitting(false);
      }}
      initialValues={{
        name: patient.name,
        email: patient.email,
        street: patient.address.street,
        city: patient.address.city,
        state: patient.address.state,
        zip: patient.address.pincode,
        phone: patient.phoneNo
      }}
      validate={values => {
        const errors = {};

        if(!values.name){
          errors.name = 'Required';
        }

        if (!values.email) {
          errors.email = 'Required';
        } 
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        if (!values.street) {
          errors.street = 'Required';
        } 
        if (!values.city) {
          errors.city = 'Required';
        } 
        if (!values.state) {
          errors.state = 'Required';
        } 
        if (!values.zip) {
          errors.zip = 'Required';
        } 
        else if(!/^\d{3}[-\s]?(?:\d{3})?$/.test(values.zip)){
          errors.zip = "Invalid pincode"
        }

        if(!values.phone){
          errors.phone = 'Required';
        }
        else if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(values.phone)) {
          errors.phone = 'Invalid phone number';
        }

        return errors;
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} sm="6" controlId="validationFormik01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder='Name'
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                  {errors.name}
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm="6" controlId="validationFormikEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
                <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">

            <Form.Group as={Col} sm="6" controlId="validationFormik03">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="text"
                placeholder="Street"
                name="street"
                value={values.street}
                onChange={handleChange}
                isValid={touched.street && !errors.street}
                isInvalid={!!errors.street}
              />

              <Form.Control.Feedback type="invalid">
                {errors.street}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isValid={touched.city && !errors.city}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} sm="4" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isValid={touched.state && !errors.state}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm="4" controlId="validationFormik05">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isValid={touched.zip && !errors.zip}
                isInvalid={!!errors.zip}
              />
              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm="4" controlId="validationFormik05">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                isValid={touched.phone && !errors.phone}
                isInvalid={!!errors.phone}
              />

              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" variant="success">
            Edit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default EditModal