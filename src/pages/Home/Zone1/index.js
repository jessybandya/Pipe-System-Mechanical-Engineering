import { Button } from '@mui/material';
import React from 'react'
import { Modal } from 'react-bootstrap';
import Basement from './Basement';
import Fifth from './Fifth';
import First from './First';
import Fourth from './Fourth';
import Ground from './Ground';
import Conversion from './More/Conversion';
import Second from './Second';
import Third from './Third';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function SmallExample() {
  const [modalShowBasement, setModalShowBasement] = React.useState(false);
  const [modalShowGround, setModalShowGround] = React.useState(false);
  const [modalShowFirst, setModalShowFirst] = React.useState(false);
  const [modalShowSecond, setModalShowSecond] = React.useState(false);
  const [modalShowThird, setModalShowThird] = React.useState(false);
  const [modalShowFourth, setModalShowFourth] = React.useState(false);
  const [modalShowFifth, setModalShowFifth] = React.useState(false);

  const [basementTotal, setBasementTotal] = React.useState(0.0);
  const [groundTotal, setGroundTotal] = React.useState(0.0);
  const [firstTotal, setFirstTotal] = React.useState(0.0);
  const [secondTotal, setSecondTotal] = React.useState(0.0);
  const [thirdTotal, setThirdTotal] = React.useState(0.0);
  const [fourthTotal, setFourthTotal] = React.useState(0.0);
  const [fifthTotal, setFifthTotal] = React.useState(0.0);
  var value = parseFloat(basementTotal) + parseFloat(groundTotal) + parseFloat(firstTotal) + parseFloat(secondTotal) + parseFloat(thirdTotal) + parseFloat(fourthTotal) + parseFloat(fifthTotal)

  return (
    <center
    className='main-body'
 >
     <div
     style={{
      display:'flex',
      alignItems:'center',
      flexWrap:'wrap'
     }}
     >
     <Button style={{marginLeft:5, marginTop:8}} onClick={() => setModalShowBasement(true)} variant="contained" color="primary">Basement</Button>
     <Button style={{marginLeft:5, marginTop:8}} onClick={() => setModalShowGround(true)} variant="contained" color="primary">Ground Floor</Button> 
     <Button style={{marginLeft:5, marginTop:8}} onClick={() => setModalShowFirst(true)} variant="contained" color="primary">1st Floor</Button>
     <Button style={{marginLeft:5, marginTop:8}} onClick={() => setModalShowSecond(true)} variant="contained" color="primary">2nd Floor</Button>
     <Button style={{marginLeft:5, marginTop:8}} onClick={() => setModalShowThird(true)} variant="contained" color="primary">3rd Floor</Button>
     <Button style={{marginLeft:5, marginTop:8}} onClick={() => setModalShowFourth(true)} variant="contained" color="primary">4th Floor</Button>
     <Button style={{marginLeft:5, marginTop:8}} onClick={() => setModalShowFifth(true)} variant="contained" color="primary">5th Floor</Button> 
     </div>

     <TableContainer style={{marginTop:10}} component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>Basement</TableCell>
           <TableCell align="right">Ground Floor</TableCell>
           <TableCell align="right">1st Floor</TableCell>
           <TableCell align="right">2nd Floor</TableCell>
           <TableCell align="right">3rd Floor</TableCell>
           <TableCell align="right">4th Floor</TableCell>
           <TableCell align="right">5th Floor</TableCell>
           <TableCell style={{fontWeight:'bold'}} align="right">Total</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
           <TableRow
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row">
               {basementTotal}
             </TableCell>
             <TableCell align="right">{groundTotal.toFixed(3)}</TableCell>
             <TableCell align="right">{firstTotal.toFixed(3)}</TableCell>
             <TableCell align="right">{secondTotal.toFixed(3)}</TableCell>
             <TableCell align="right">{thirdTotal.toFixed(3)}</TableCell>
             <TableCell align="right">{fourthTotal.toFixed(3)}</TableCell>
             <TableCell align="right">{fifthTotal.toFixed(3)}</TableCell>
             <TableCell style={{fontWeight:'bold'}} align="right">{value.toFixed(3)}</TableCell>
           </TableRow>
       </TableBody>
     </Table>
   </TableContainer>

     <Conversion value={value}/>

    <Modal
    show={modalShowBasement}
     onHide={() => setModalShowBasement(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Basement Entry Modal - {basementTotal}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
      style={{
        height: '75vh',
        overflowY:'auto'
       }}
      >
       <Basement setBasementTotal={setBasementTotal}/>
      </Modal.Body>
    </Modal>
    <Modal
    show={modalShowGround}
     onHide={() => setModalShowGround(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ground Entry Modal - {groundTotal}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
      style={{
        height: '75vh',
        overflowY:'auto'
       }}
      >
       <Ground setGroundTotal={setGroundTotal}/>
      </Modal.Body>
    </Modal>

    <Modal
    show={modalShowFirst}
     onHide={() => setModalShowFirst(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          1st Floor Entry Modal - {firstTotal}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
      style={{
        height: '75vh',
        overflowY:'auto'
       }}
      >
       <First setGroundTotal={setFirstTotal}/>
      </Modal.Body>
    </Modal>

    <Modal
    show={modalShowSecond}
     onHide={() => setModalShowSecond(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          2nd Floor Entry Modal - {secondTotal}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
      style={{
        height: '75vh',
        overflowY:'auto'
       }}
      >
       <Second setGroundTotal={setSecondTotal}/>
      </Modal.Body>
    </Modal>

    <Modal
    show={modalShowThird}
     onHide={() => setModalShowThird(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          3rd Floor Entry Modal - {thirdTotal}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
      style={{
        height: '75vh',
        overflowY:'auto'
       }}
      >
       <Third setGroundTotal={setThirdTotal}/>
      </Modal.Body>
    </Modal>

    <Modal
    show={modalShowFourth}
     onHide={() => setModalShowFourth(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          4th Floor Entry Modal - {fourthTotal}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
      style={{
        height: '75vh',
        overflowY:'auto'
       }}
      >
       <Fourth setGroundTotal={setFourthTotal}/>
      </Modal.Body>
    </Modal>

    <Modal
    show={modalShowFifth}
     onHide={() => setModalShowFifth(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          5th Floor Entry Modal - {fifthTotal}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
      style={{
        height: '75vh',
        overflowY:'auto'
       }}
      >
       <Fifth setGroundTotal={setFifthTotal}/>
      </Modal.Body>
    </Modal>

    </center>
  );
}

export default SmallExample;