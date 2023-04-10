import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Modal } from 'react-bootstrap';
import {Table as Table1} from 'react-bootstrap';


function Description({setPipeDevelopmentLength}) {
  const [modalShow, setModalShow] = React.useState(false);
  const [developedLength, setDevelopedLenght] = useState(0.0)
  const [pumpHead, setPumpHead] = useState(0.0)
  const [differenceElevation, setDifferenceElevation] = useState(0.0)
  const [pressureLoss, setPressureLoss] = useState(0.0)
  const [overallStaticPressure, setOverallStaticPressure] = useState(0.0)
  const [overallStaticPressureAvailableToOvercome, setOverallStaticPressureAvailableToOvercome] = useState(0.0)

  var availablePumpPressure= (parseFloat(pumpHead) * 0.433)
  var staticPressure= (parseFloat(differenceElevation) * 0.433)


  const calculateDesc = () => {
    var overallStaticPressure= (parseFloat(staticPressure) + parseFloat(pressureLoss))
    var overallStaticPressureAvailableToOvercome = (parseFloat(availablePumpPressure) - parseFloat(overallStaticPressure))
    setOverallStaticPressure(overallStaticPressure)
    setOverallStaticPressureAvailableToOvercome(overallStaticPressureAvailableToOvercome)
    setPipeDevelopmentLength(developedLength)
  }


  return (
    <div>
    <center><Button style={{marginTop:10}} variant="contained" onClick={() => setModalShow(true)} color="primary">Description</Button></center>
    <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>D.L</TableCell>
          <TableCell align="right">M.P</TableCell>
          <TableCell align="right">P.P</TableCell>
          <TableCell align="right">E.D</TableCell>
          <TableCell align="right">S.P L E</TableCell>
          <TableCell align="right">P.L.S.F</TableCell>
          <TableCell align="right">O.S.L</TableCell>
          <TableCell style={{fontWeight:'bold'}} align="right">Pressure Overcome Friction</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {developedLength}
            </TableCell>
            <TableCell align="right">{pumpHead}</TableCell>
            <TableCell align="right">{availablePumpPressure.toFixed(3)}</TableCell>
            <TableCell align="right">{differenceElevation}</TableCell>
            <TableCell align="right">{staticPressure.toFixed(3)}</TableCell>
            <TableCell align="right">{pressureLoss}</TableCell>
            <TableCell align="right">{overallStaticPressure.toFixed(3)}</TableCell>
            <TableCell style={{fontWeight:'bold'}} align="right">{overallStaticPressureAvailableToOvercome.toFixed(3)}</TableCell>
          </TableRow>
      </TableBody>
    </Table>
  </TableContainer>


  <Modal
  show={modalShow}
   onHide={() => setModalShow(false)}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Pressure available to overcome pipe friction - {overallStaticPressureAvailableToOvercome.toFixed(3)}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body
    style={{
      height: '50vh',
      overflowY:'auto'
     }}
    >
    <Table1 striped bordered hover size="sm">
    <thead>
      <tr>
        <th>No.</th>
        <th>DESCRIPTION</th>
        <th>VALUE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Developed length of run(ft)</td>
        <td style={{padding:0}}><input type='number' step="0.01" style={{width:'100%'}}
        onChange={(e) => setDevelopedLenght(e.target.value)}
        value={developedLength} 
        /></td>
      </tr>
      <tr>
      <td>2</td>
      <td>Minimum Pump Head(ft)</td>
      <td>
      <input type='number' step="0.01" style={{width:'100%'}} 
      onChange={(e) => setPumpHead(e.target.value)}
      value={pumpHead} 
        />
      </td>
    </tr>
    <tr>
    <td>3</td>
    <td>Difference in Elevation between the source and highest water supply outlet(ft)</td>
    <td style={{padding:0}}><input type='number' step="0.01" style={{width:'100%'}} 
    onChange={(e) => setDifferenceElevation(e.target.value)}
    value={differenceElevation} 
    /></td>
  </tr>
  <tr>
  <td>4</td>
  <td>Pressure loss due to special fittings(obtain from manufacturerer, psi)</td>
  <td>
  <input type='number' step="0.01" style={{width:'100%'}}
  onChange={(e) => setPressureLoss(e.target.value)}
  value={pressureLoss}  
    />
  </td>
</tr>
    </tbody>
  </Table1>
  <center>  <Button onClick={calculateDesc} variant="contained" color="primary">Calculate</Button>
  </center>
    </Modal.Body>
  </Modal>
    </div>
  )
}

export default Description