import React from 'react'
import { Button } from 'react-bootstrap'

const ReadableRecord = ({ p, index, handleEditId, handleDeleteId }) => {
  return (
    <tr className="align-items-center">
        <td>{index+1}</td>
        <td>{p.name}</td>
        <td>{p.email}</td>
        <td>{p.phoneNo}</td>
        <td>{p.address.street}</td>
        <td>{p.address.city}</td>
        <td>{p.address.state}</td>
        <td>{p.address.pincode}</td>
        <td>
        <Button variant="primary" onClick={() => handleEditId(p)} >
            Edit
        </Button>
        <Button variant="danger" onClick={() => handleDeleteId(p._id)} >
            Delete
        </Button>
        </td>
    </tr>
  )
}

export default ReadableRecord