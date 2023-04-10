import React, { useEffect, useRef, useState } from 'react'
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
import { downloadExcel } from "react-export-table-to-excel";

function Final({ valueTotal,sixthTotal,seventhTotal,EighthTotal,NinethTotal,TenthTotal,EleventhTotal,pipeDevelopmentLength}) {


    const [modalShow, setModalShow] = React.useState(false);
     const [bg, setBg] = useState(0.0)
     const [gf1, setGf1] = useState(0.0)
     const [f1f2, setF1f2] = useState(0.0)
     const [f2f3, setF2f3] = useState(0.0)
     const [f3f4, setF3f4] = useState(0.0)
     const [f4f5, setF4f5] = useState(0.0)
    

    const finalFun = () => {
        setModalShow(true)
        const bg = sixthTotal + seventhTotal + EighthTotal + NinethTotal + TenthTotal + EleventhTotal
        const gf1 = seventhTotal + EighthTotal + NinethTotal + TenthTotal + EleventhTotal
        const f1f2 = EighthTotal + NinethTotal + TenthTotal + EleventhTotal
        const f2f3 = NinethTotal + TenthTotal + EleventhTotal
        const f3f4 = TenthTotal + EleventhTotal
        const f4f5 = EleventhTotal

        setBg(bg)
        setGf1(gf1)
        setF1f2(f1f2)
        setF2f3(f2f3)
        setF3f4(f3f4)
        setF4f5(f4f5) 
    }

    const header = ["Pipe Section", "Fixture Units", "Size"];
    const body = [
      ["F5-F6", bg.toFixed(2), sizeFun(bg,pipeDevelopmentLength)],
      ["F6-F7", gf1.toFixed(2), sizeFun(gf1,pipeDevelopmentLength)],
      ["F7-F8", f1f2.toFixed(2), sizeFun(f1f2,pipeDevelopmentLength)],
      ["F8-F9", f2f3.toFixed(2), sizeFun(f2f3,pipeDevelopmentLength)],
      ["F9-F10", f3f4.toFixed(2), sizeFun(f3f4,pipeDevelopmentLength)],
      ["F10-F11", f4f5.toFixed(2), sizeFun(f4f5,pipeDevelopmentLength)],
    ];
  
  
    function handleDownloadExcel() {
      downloadExcel({
        fileName: "Zone 2",
        sheet: "Data",
        tablePayload: {
          header,
          // accept two different data structures
          body: body
        },
      });
    }

  return (
    <div>
    <center><Button style={{marginTop:10}} variant="contained" onClick={finalFun} color="primary">Final Data</Button></center>
    
    <Modal
    show={modalShow}
     onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <Button onClick={handleDownloadExcel} variant="contained" color="primary">Download data</Button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
      style={{
        height: '70vh',
        overflowY:'auto'
       }}
      >
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{background:'#3498db',color:'#fff',fontWeight:'bold'}}>Pipe Section</TableCell>
            <TableCell style={{background:'#3498db',color:'#fff',fontWeight:'bold'}} align="right">Fixture Units</TableCell>
            <TableCell style={{background:'#3498db',color:'#fff',fontWeight:'bold'}} align="right">Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              F5-F6
              </TableCell>
              <TableCell align="right">{bg.toFixed(2)}</TableCell>
              <TableCell align="right">{sizeFun(bg,pipeDevelopmentLength)}</TableCell>
            </TableRow>


            <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
            F6-F7
            </TableCell>
            <TableCell align="right">{gf1.toFixed(2)}</TableCell>
            <TableCell align="right">{sizeFun(gf1,pipeDevelopmentLength)}</TableCell>
          </TableRow>


          <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
          F7-F8
          </TableCell>
          <TableCell align="right">{f1f2.toFixed(2)}</TableCell>
          <TableCell align="right">{sizeFun(f1f2,pipeDevelopmentLength)}</TableCell>
        </TableRow>

        <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
        F8-F9
        </TableCell>
        <TableCell align="right">{f2f3.toFixed(2)}</TableCell>
        <TableCell align="right">{sizeFun(f2f3,pipeDevelopmentLength)}</TableCell>
      </TableRow>

      <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
      F9-F10
      </TableCell>
      <TableCell align="right">{f3f4.toFixed(2)}</TableCell>
      <TableCell align="right">{sizeFun(f3f4,pipeDevelopmentLength)}</TableCell>
    </TableRow>


    <TableRow
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
    <TableCell component="th" scope="row">
    F10-F11
    </TableCell>
    <TableCell align="right">{f4f5.toFixed(2)}</TableCell>
    <TableCell align="right">{sizeFun(f4f5,pipeDevelopmentLength)}</TableCell>
  </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <center style={{marginTop:8}}><Button variant="contained" color="primary">Developed length of run: {pipeDevelopmentLength}</Button></center>
      </Modal.Body>
    </Modal>

    </div>
  )
}

export default Final

function sizeFun (fixture, pipeDevelopmentLength){
    const jessy = () =>{
        if(pipeDevelopmentLength == 100){

            if(fixture <= 533 && fixture >365){
                return 2.5
            }else if(fixture <= 365 && fixture >275){
                return 2
            }else if(fixture <= 275 && fixture >151){
                return 2
            }else if(fixture <= 151 && fixture >151){
                return 1.5
            }else if(fixture <= 151 && fixture >87){
                return 1.5
            }else if(fixture <= 87 && fixture >75){
                return 1.5
            }else if(fixture <= 75 && fixture >45){
                return 1.25
            }else if(fixture <= 45 && fixture >32){
                return 1.25
            }else if(fixture <= 32 && fixture >21){
                return 1.25
            }else if(fixture <= 21 && fixture >16.5){
                return 1
            }else if(fixture <= 16.5 && fixture >5.5){
                return 1
            }else if(fixture <= 5.5 && fixture >1.5){
                return 0.75
            }else if(fixture >=1.5){
                return 0.5
            }
    
    }else if(pipeDevelopmentLength == 150){
        if(fixture <= 495 && fixture >266){
            return 2.5
        }else if(fixture <= 266 && fixture >223){
            return 2
        }else if(fixture <= 223 && fixture >128){
            return 2
        }else if(fixture <= 128 && fixture >117){
            return 1.5
        }else if(fixture <= 117 && fixture >84){
            return 1.5
        }else if(fixture <= 84 && fixture >54){
            return 1.5
        }else if(fixture <= 54 && fixture >34){
            return 1.25
        }else if(fixture <= 34 && fixture >30){
            return 1.25
        }else if(fixture <= 30 && fixture >13.5){
            return 1.25
        }else if(fixture <= 13.5 && fixture >11){
            return 1
        }else if(fixture <= 11 && fixture >4){
            return 1
        }else if(fixture <= 4 && fixture >1){
            return 0.75
        }else if(fixture >=1){
            return 0.5
        }
    }else if(pipeDevelopmentLength == 200){
        if(fixture <= 448 && fixture >229){
            return 2.5
        }else if(fixture <= 229 && fixture >196){
            return 2
        }else if(fixture <= 196 && fixture >99){
            return 2
        }else if(fixture <= 99 && fixture >92){
            return 1.5
        }else if(fixture <= 92 && fixture >73){
            return 1.5
        }else if(fixture <= 73 && fixture >40){
            return 1.5
        }else if(fixture <= 40 && fixture >22){
            return 1.25
        }else if(fixture <= 22 && fixture >24){
            return 1.25
        }else if(fixture <= 24 && fixture >10){
            return 1.25
        }else if(fixture <= 10 && fixture >9){
            return 1
        }else if(fixture <= 9 && fixture >3.5){
            return 1
        }else if(fixture <= 3.5 && fixture >1){
            return 0.75
        }else if(fixture >=1){
            return 0.5
        }
    }else if(pipeDevelopmentLength == 250){
        if(fixture <= 409 && fixture >201){
            return 2.5
        }else if(fixture <= 201 && fixture >174){
            return 2
        }else if(fixture <= 174 && fixture >72){
            return 2
        }else if(fixture <= 72 && fixture >69){
            return 1.5
        }else if(fixture <= 69 && fixture >56){
            return 1.5
        }else if(fixture <= 56 && fixture >25){
            return 1.5
        }else if(fixture <= 25 && fixture >22){
            return 1.25
        }else if(fixture <= 22 && fixture >17){
            return 1.25
        }else if(fixture <= 17 && fixture >7){
            return 1.25
        }else if(fixture <= 7 && fixture >6.5){
            return 1
        }else if(fixture <= 6.5 && fixture >2.5){
            return 1
        }else if(fixture <= 2.5 && fixture >0.5){
            return 0.75
        }else if(fixture >=0.5){
            return 0.5
        }
    }else if(pipeDevelopmentLength == 300){
        if(fixture <= 409 && fixture >201){
            return 2.5
        }else if(fixture <= 201 && fixture >174){
            return 2
        }else if(fixture <= 174 && fixture >72){
            return 2
        }else if(fixture <= 72 && fixture >69){
            return 1.5
        }else if(fixture <= 69 && fixture >56){
            return 1.5
        }else if(fixture <= 56 && fixture >25){
            return 1.5
        }else if(fixture <= 25 && fixture >22){
            return 1.25
        }else if(fixture <= 22 && fixture >17){
            return 1.25
        }else if(fixture <= 17 && fixture >7){
            return 1.25
        }else if(fixture <= 7 && fixture >6.5){
            return 1
        }else if(fixture <= 6.5 && fixture >2.5){
            return 1
        }else if(fixture <= 2.5 && fixture >0.5){
            return 0.75
        }else if(fixture >=0.5){
            return 0.5
        }
    }else if(pipeDevelopmentLength == 400){
        if(fixture <= 174 && fixture >87){
            return 2.5
        }else if(fixture <= 87 && fixture >72){
            return 2
        }else if(fixture <= 72 && fixture >56){
            return 2
        }else if(fixture <= 56 && fixture >54){
            return 1.5
        }else if(fixture <= 54 && fixture >45){
            return 1.5
        }else if(fixture <= 45 && fixture >17.5){
            return 1.5
        }else if(fixture <= 17.5 && fixture >12){
            return 1.25
        }else if(fixture <= 12 && fixture >13){
            return 1.25
        }else if(fixture <= 13 && fixture >5.5){
            return 1.25
        }else if(fixture <= 5.5 && fixture >5.5){
            return 1
        }else if(fixture <= 5.5 && fixture >2){
            return 1
        }else if(fixture <= 2 && fixture >0){
            return 0.75
        }else if(fixture >=0){
            return 0.5
        }
    }
    }

return (
    <>
    {jessy()}
    </>
)
}