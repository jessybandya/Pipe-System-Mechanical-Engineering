import React, { useEffect, useState } from 'react'
import { ConversionDataZone1 } from '../ConversionDataZone1'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function Conversion({ value }) {
    const [y1, setY1] = useState(0.0)
    const [y2, setY2] = useState(0.0)
    const [x1, setX1] = useState(0.0)
    const [x2, setX2] = useState(0.0)
    const [convertedValue, setConvertedValue] = useState(0.0)
// get all lower values
const allLower = ConversionDataZone1.map((b) => value > b ? b : null).filter(x => x);
const lower = allLower[allLower.length - 1]; // get lowest
const upper = ConversionDataZone1[ConversionDataZone1.indexOf(lower) + 1]; // get next


useEffect(() => {
    upperLimitY2(upper)
    lowerLimitY1(lower)
    setX1(lower)
setX2(upper)
}, [value])



const convert = () => {

    
    upperLimitY2(upper)
    lowerLimitY1(lower)

    var total = parseFloat(y1) + (((parseFloat(value)-parseFloat(lower)) * (parseFloat(y2)-parseFloat(y1)))/(parseFloat(upper)-parseFloat(lower)))
    setConvertedValue(total)

}

const upperLimitY2 = (x) =>{
    if(x === 1){
        setY2(2)
    }else if(x === 2){
        setY2(5)
    }else if(x === 3){
        setY2(6.5)
    }else if(x === 4){
        setY2(8)
    }else if(x === 5){
        setY2(9.4)
    }else if(x === 6){
        setY2(10.7)
    }else if(x === 7){
        setY2(11.8)
    }else if(x === 8){
        setY2(12.8)
    }else if(x === 9){
        setY2(13.7)
    }else if(x === 10){
        setY2(14.6)
    }else if(x === 11){
        setY2(15.4)
    }else if(x === 12){
        setY2(16)
    }else if(x === 13){
        setY2(16.5)
    }else if(x === 14){
        setY2(17)
    }else if(x === 15){
        setY2(17.5)
    }else if(x === 16){
        setY2(18)
    }else if(x === 18){
        setY2(18.4)
    }else if(x === 19){
        setY2(19.2)
    }else if(x === 20){
        setY2(19.6)
    }else if(x === 25){
        setY2(21.5)
    }else if(x === 30){
        setY2(23.3)
    }else if(x === 35){
        setY2(24.9)
    }else if(x === 40){
        setY2(26.3)
    }else if(x === 45){
        setY2(27.7)
    }else if(x === 50){
        setY2(29.1)
    }else if(x === 60){
        setY2(32)
    }else if(x === 70){
        setY2(35)
    }else if(x === 80){
        setY2(38)
    }else if(x === 90){
        setY2(41)
    }else if(x === 100){
        setY2(43.5)
    }else if(x === 120){
        setY2(48)
    }else if(x === 140){
        setY2(52.5)
    }else if(x === 160){
        setY2(57)
    }else if(x === 180){
        setY2(61)
    }else if(x === 200){
        setY2(65)
    }else if(x === 225){
        setY2(70)
    }else if(x === 275){
        setY2(80)
    }else if(x === 300){
        setY2(85)
    }else if(x === 400){
        setY2(105)
    }else if(x === 500){
        setY2(124)
    }else if(x === 750){
        setY2(170)
    }else if(x === 1000){
        setY2(208)
    }else if(x === 1250){
        setY2(239)
    }else if(x === 1500){
        setY2(269)
    }else if(x === 1750){
        setY2(297)
    }else if(x === 2000){
        setY2(325)
    }else if(x === 2500){
        setY2(380)
    }else if(x === 3000){
        setY2(433)
    }else if(x === 4000){
        setY2(525)
    }else if(x === 5000){
        setY2(593)
    }
}
const lowerLimitY1 = (x) =>{
    if(x === 1){
        setY1(2)
    }else if(x === 2){
        setY1(5)
    }else if(x === 3){
        setY1(6.5)
    }else if(x === 4){
        setY1(8)
    }else if(x === 5){
        setY1(9.4)
    }else if(x === 6){
        setY1(10.7)
    }else if(x === 7){
        setY1(11.8)
    }else if(x === 8){
        setY1(12.8)
    }else if(x === 9){
        setY1(13.7)
    }else if(x === 10){
        setY1(14.6)
    }else if(x === 11){
        setY1(15.4)
    }else if(x === 12){
        setY1(16)
    }else if(x === 13){
        setY1(16.5)
    }else if(x === 14){
        setY1(17)
    }else if(x === 15){
        setY1(17.5)
    }else if(x === 16){
        setY1(18)
    }else if(x === 18){
        setY1(18.4)
    }else if(x === 19){
        setY1(19.2)
    }else if(x === 20){
        setY1(19.6)
    }else if(x === 25){
        setY1(21.5)
    }else if(x === 30){
        setY1(23.3)
    }else if(x === 35){
        setY1(24.9)
    }else if(x === 40){
        setY1(26.3)
    }else if(x === 45){
        setY1(27.7)
    }else if(x === 50){
        setY1(29.1)
    }else if(x === 60){
        setY1(32)
    }else if(x === 70){
        setY1(35)
    }else if(x === 80){
        setY1(38)
    }else if(x === 90){
        setY1(41)
    }else if(x === 100){
        setY1(43.5)
    }else if(x === 120){
        setY1(48)
    }else if(x === 140){
        setY1(52.5)
    }else if(x === 160){
        setY1(57)
    }else if(x === 180){
        setY1(61)
    }else if(x === 200){
        setY1(65)
    }else if(x === 225){
        setY1(70)
    }else if(x === 275){
        setY1(80)
    }else if(x === 300){
        setY1(85)
    }else if(x === 400){
        setY1(105)
    }else if(x === 500){
        setY1(124)
    }else if(x === 750){
        setY1(170)
    }else if(x === 1000){
        setY1(208)
    }else if(x === 1250){
        setY1(239)
    }else if(x === 1500){
        setY1(269)
    }else if(x === 1750){
        setY1(297)
    }else if(x === 2000){
        setY1(325)
    }else if(x === 2500){
        setY1(380)
    }else if(x === 3000){
        setY1(433)
    }else if(x === 4000){
        setY1(525)
    }else if(x === 5000){
        setY1(593)
    }
}


  return (
    <div>
    <center><Button style={{marginTop:10}} variant="contained" color="primary" onClick={convert}>Convert {value.toFixed(3)}</Button></center>
    <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Search value</TableCell>
          <TableCell align="right">WSFU LOWER</TableCell>
          <TableCell align="right">WSFU UPPER</TableCell>
          <TableCell align="right">GPM LOWER</TableCell>
          <TableCell align="right">GPM UPPER</TableCell>
          <TableCell style={{fontWeight:'bold'}} align="right">Converted</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {value.toFixed(3)}
            </TableCell>
            <TableCell align="right">{lower}</TableCell>
            <TableCell align="right">{upper}</TableCell>
            <TableCell align="right">{y1}</TableCell>
            <TableCell align="right">{y2}</TableCell>
            <TableCell style={{fontWeight:'bold'}} align="right">{convertedValue.toFixed(3)}</TableCell>
          </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

export default Conversion