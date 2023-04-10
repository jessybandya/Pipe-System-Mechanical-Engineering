import { Button } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Modal } from 'react-bootstrap';
import Sixth from './Sixth';
import Seventh from './Seventh';
import Eith from './Eith';
import Nineth from './Nineth';
import Tenth from './Tenth';
import Eleventh from './Eleventh';
import Conversion from '../Zone1/More/Conversion';
import Description from '../Zone1/More/Description';
import Final from './More/Final';


function Zone2() {
    const [modalShowSixth, setModalShowSixth] = React.useState(false);
    const [modalShowSeventh, setModalShowSeventh] = React.useState(false);
    const [modalShowEighth, setModalShowEighth] = React.useState(false);
    const [modalShowNineth, setModalShowNineth] = React.useState(false);
    const [modalShowTenth, setModalShowTenth] = React.useState(false);
    const [modalShowEleventh, setModalShowEleventh] = React.useState(false);
  
    const [sixthTotal, setSixthTotal] = React.useState(0.0);
    const [seventhTotal, setSeventhTotal] = React.useState(0.0);
    const [EighthTotal, setEighthTotal] = React.useState(0.0);
    const [NinethTotal, setNinethTotal] = React.useState(0.0);
    const [TenthTotal, setTenthTotal] = React.useState(0.0);
    const [EleventhTotal, setEleventhTotal] = React.useState(0.0);

    const [pipeDevelopmentLength, setPipeDevelopmentLength] = React.useState(false);
    var value = parseFloat(sixthTotal) + parseFloat(seventhTotal) + parseFloat(EighthTotal) + parseFloat(NinethTotal) + parseFloat(TenthTotal) + parseFloat(EleventhTotal)
  return (
    <center
    className='main-body'
 >
     <div
     style={{
      display:'table',
      margin:'auto',
     }}
     >
     <Button style={{marginLeft:5, marginTop:8}}  onClick={() => setModalShowSixth(true)} variant="contained" color="primary">6th Floor</Button>
     <Button style={{marginLeft:5, marginTop:8}}  onClick={() => setModalShowSeventh(true)} variant="contained" color="primary">7th Floor</Button> 
     <Button style={{marginLeft:5, marginTop:8}}  onClick={() => setModalShowEighth(true)} variant="contained" color="primary">8th Floor</Button>
     <Button style={{marginLeft:5, marginTop:8}}  onClick={() => setModalShowNineth(true)} variant="contained" color="primary">9th Floor</Button>
     <Button style={{marginLeft:5, marginTop:8}}  onClick={() => setModalShowTenth(true)} variant="contained" color="primary">10th Floor</Button>
     <Button style={{marginLeft:5, marginTop:8}}  onClick={() => setModalShowEleventh(true)} variant="contained" color="primary">11th Floor</Button>
     </div>

     <TableContainer style={{marginTop:10}} component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>6th Floor</TableCell>
           <TableCell align="right">7th Floor</TableCell>
           <TableCell align="right">8th Floor</TableCell>
           <TableCell align="right">9th Floor</TableCell>
           <TableCell align="right">10th Floor</TableCell>
           <TableCell align="right">11th Floor</TableCell>
           <TableCell style={{fontWeight:'bold'}} align="right">Total</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
           <TableRow
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row">
               {sixthTotal.toFixed(3)}
             </TableCell>
             <TableCell align="right">{seventhTotal.toFixed(3)}</TableCell>
             <TableCell align="right">{EighthTotal.toFixed(3)}</TableCell>
             <TableCell align="right">{NinethTotal.toFixed(3)}</TableCell>
             <TableCell align="right">{TenthTotal.toFixed(3)}</TableCell>
             <TableCell align="right">{EleventhTotal.toFixed(3)}</TableCell>
             <TableCell style={{fontWeight:'bold'}} align="right">{value.toFixed(3)}</TableCell>
           </TableRow>
       </TableBody>
     </Table>
   </TableContainer>

   <Conversion value={value}/>
   <Description setPipeDevelopmentLength={setPipeDevelopmentLength}/>
   <Final valueTotal={value} sixthTotal={sixthTotal} seventhTotal={seventhTotal} EighthTotal={EighthTotal} NinethTotal={NinethTotal} TenthTotal={TenthTotal} EleventhTotal={EleventhTotal} pipeDevelopmentLength={pipeDevelopmentLength}/>

   <Modal
   show={modalShowSixth}
    onHide={() => setModalShowSixth(false)}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         6th Floor Entry Modal - {sixthTotal.toFixed(3)}
       </Modal.Title>
     </Modal.Header>
     <Modal.Body
     style={{
       height: '75vh',
       overflowY:'auto'
      }}
     >
      <Sixth setBasementTotal={setSixthTotal}/>
     </Modal.Body>
   </Modal>


   <Modal
   show={modalShowSeventh}
    onHide={() => setModalShowSeventh(false)}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         7th Floor Entry Modal - {seventhTotal.toFixed(3)}
       </Modal.Title>
     </Modal.Header>
     <Modal.Body
     style={{
       height: '75vh',
       overflowY:'auto'
      }}
     >
      <Seventh setGroundTotal={setSeventhTotal}/>
     </Modal.Body>
   </Modal>

   <Modal
   show={modalShowEighth}
    onHide={() => setModalShowEighth(false)}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         8th Floor Entry Modal - {EighthTotal.toFixed(3)}
       </Modal.Title>
     </Modal.Header>
     <Modal.Body
     style={{
       height: '75vh',
       overflowY:'auto'
      }}
     >
      <Eith setGroundTotal={setEighthTotal}/>
     </Modal.Body>
   </Modal>

   <Modal
   show={modalShowNineth}
    onHide={() => setModalShowNineth(false)}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         9th Floor Entry Modal - {NinethTotal.toFixed(3)}
       </Modal.Title>
     </Modal.Header>
     <Modal.Body
     style={{
       height: '75vh',
       overflowY:'auto'
      }}
     >
      <Nineth setGroundTotal={setNinethTotal}/>
     </Modal.Body>
   </Modal>

   <Modal
   show={modalShowTenth}
    onHide={() => setModalShowTenth(false)}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         10th Floor Entry Modal - {TenthTotal.toFixed(3)}
       </Modal.Title>
     </Modal.Header>
     <Modal.Body
     style={{
       height: '75vh',
       overflowY:'auto'
      }}
     >
      <Tenth setGroundTotal={setTenthTotal}/>
     </Modal.Body>
   </Modal>

   <Modal
   show={modalShowEleventh}
    onHide={() => setModalShowEleventh(false)}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         11th Floor Entry Modal - {EleventhTotal.toFixed(3)}
       </Modal.Title>
     </Modal.Header>
     <Modal.Body
     style={{
       height: '75vh',
       overflowY:'auto'
      }}
     >
      <Eleventh setGroundTotal={setEleventhTotal}/>
     </Modal.Body>
   </Modal>

    </center>
  )
}

export default Zone2