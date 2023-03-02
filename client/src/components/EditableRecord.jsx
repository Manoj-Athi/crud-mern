import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const EditableRecord = ({ index, patient, handleSubmit, handleChange, values, touched, isValid, errors}) => {

    values = {
        name: patient.name ,
        email: patient.email,
        street: patient.address.street ,
        city: patient.address.city ,
        state: patient.address.state ,
        zip: patient.address.pincode ,
        phone: patient.phoneNo
    }

  return (
    <tr className="mb-3">
        <td>{index+1}</td>
        <td>
            <Form.Group controlId="validationFormik01">
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
        </td>
        <td>
            <Form.Group controlId="validationFormikEmail">
            <InputGroup hasValidation>
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
        </td>
        <td>
            <Form.Group controlId="validationFormik05">
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
        </td>
        <td>
            <Form.Group controlId="validationFormik03">
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
        </td>
        <td>
            <Form.Group controlId="validationFormik03">
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
        </td>
        <td>
            <Form.Group controlId="validationFormik04">
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
        </td>
        <td>
            <Form.Group controlId="validationFormik05">
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
        </td>
        <td>
            <Button type="submit" variant="primary" >
                Edit
            </Button>
            <Button type="submit" variant="danger">
                Delete
            </Button>
        </td>
    </tr>
  );
}

export default EditableRecord