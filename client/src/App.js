import { useState, useEffect } from 'react';
import ModalFormContainer from "./components/ModalFormContainer";
import DisplayPatients from './components/DisplayPatients';
import { fetchAllDetails, createPatientDetails, updatePatientDetails, deletePatientDetails } from './api';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {

  const [patientRecords, setPatientRecords] = useState([])
  const [show, setShow] = useState(false)

  // console.log(patientRecords)

  useEffect(() => {
    const func = async () => {
      const data = await fetchAllDetails();
      console.log(data)
      if(data?.status === "SUCCESS"){
        setPatientRecords(data.data)
      }
    }
    func()
  }, [])

  const handleShow = () => {
    setShow(state => !state)
  }

  const handleCreatePatient = async (values) => {
    const data = await createPatientDetails(values);
    if(data.status === "SUCCESS"){
      setPatientRecords(state => [...state, data.data])
    }
    setShow(state => !state)
  }

  const handleEditPatient = async (_id, values) => {
    const data = await updatePatientDetails(_id, values);
    if(data.status === "SUCCESS"){
      const data = await fetchAllDetails();
      if(data?.status === "SUCCESS"){
        setPatientRecords(data.data)
      }
    }
  }

  const handleDeletePatient = async (id) => {
    console.log(id)
    const data = await deletePatientDetails(id);
    if(data.status === "SUCCESS"){
      setPatientRecords(state => state.filter(s => s._id !== id))
    }
  }

  return (
    <Container className="">
      <Row className="align-items-center">
        <Col><h1>Patient Details</h1></Col>
        <Col>
          <Button variant="success"  onClick={handleShow}>Add</Button>
        </Col>
      </Row>
      <ModalFormContainer show={show} handleClose={handleShow} handleFormSubmit={handleCreatePatient}/>
      <DisplayPatients patientRecords={patientRecords} handleEditPatient={handleEditPatient} handleDeletePatient={handleDeletePatient}/>
    </Container>
  );
}

export default App;
