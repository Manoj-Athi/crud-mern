import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

import DeleteModal from './DeleteModal'
import ReadableRecord from './ReadableRecord'
import ModalFormContainer from './ModalFormContainer'

const DisplayPatients = ({ patientRecords, handleEditPatient, handleDeletePatient }) => {

  const [editId, setEditId] = useState('')
  const [patient, setEditPatient] = useState({})
  const [showEdit, setShowEdit] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [deleteId, setDeleteId] = useState('')

  const handleEditId = (p) => {
    setShowEdit(true)
    setEditId(p._id)
    setEditPatient(p)
  }

  const handleDeleteId = (id) => {
    setDeleteId(id)
    setShowDelete(true)
  }

  const handleEditClose = () => {
    setShowEdit((state) => !state)
    setEditId('')
    setEditPatient({})
  }

  const handleDeleteClose = () => {
    setShowDelete((state) => !state)
    setDeleteId('')
  }

  const handleDelete = () => {
    handleDeletePatient(deleteId)
    setShowDelete((state) => !state)
    setDeleteId('')
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Patient Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Pincode</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          patientRecords.map((p, index) => (
            <ReadableRecord key={p._id} p={p} index={index} handleEditId={handleEditId} handleDeleteId={handleDeleteId}/>
          ))
        }
      </tbody>
      <ModalFormContainer show={showEdit} handleClose={handleEditClose} handleFormSubmit={handleEditPatient} patient={patient} editId={editId}/>
      <DeleteModal show={showDelete} handleClose={handleDeleteClose} handleDelete={handleDelete} deleteId={deleteId}/>
    </Table>
  )
}

export default DisplayPatients