import React from 'react'
import { Modal, Container } from 'react-bootstrap'

import ModalForm from './ModalForm'
import EditModal from './EditModal'

const ModalFormContainer = ({ show, handleClose, handleFormSubmit, patient, editId }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editId ? "Edit" : "Add"} patient details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {
            editId && editId.length !== 0 ? (
              <EditModal patient={patient} handleFormSubmit={handleFormSubmit} handleClose={handleClose}/>
              ) : (
              <ModalForm handleFormSubmit={handleFormSubmit} handleClose={handleClose}/> 
            )
          }
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default ModalFormContainer