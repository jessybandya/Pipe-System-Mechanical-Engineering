import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

function Second({setGroundTotal}) {
  const [input, setInput] = useState([])
const calculateBasementTotal = () =>{
  var total = ((isNaN(parseFloat(input.row1)) ? 0.0 : parseFloat(input.row1) ) * 2.7 ) + ((isNaN(parseFloat(input.row2)) ? 0.0 : parseFloat(input.row2) ) * 6 ) + ((isNaN(parseFloat(input.row3)) ? 0.0 : parseFloat(input.row3) ) * 1 ) + ((isNaN(parseFloat(input.row4)) ? 0.0 : parseFloat(input.row4) ) * 3 ) + ((isNaN(parseFloat(input.row5)) ? 0.0 : parseFloat(input.row5) )  * 1.5 ) + ((isNaN(parseFloat(input.row6)) ? 0.0 : parseFloat(input.row6) )  * 2.25 ) + ((isNaN(parseFloat(input.row8)) ? 0.0 : parseFloat(input.row8) )  * 0.25 ) + ((isNaN(parseFloat(input.row9)) ? 0.0 : parseFloat(input.row9) )  * 1 ) + ((isNaN(parseFloat(input.row10)) ? 0.0 : parseFloat(input.row10) )  * 3 ) + ((isNaN(parseFloat(input.row11)) ? 0.0 : parseFloat(input.row11) )  * 1 ) + ((isNaN(parseFloat(input.row12)) ? 0.0 : parseFloat(input.row12) ) * 0.5 ) + ((isNaN(parseFloat(input.row13)) ? 0.0 : parseFloat(input.row13) ) * 1.5) + ((isNaN(parseFloat(input.row14)) ? 0.0 : parseFloat(input.row14) ) * 2.25) + ((isNaN(parseFloat(input.row15)) ? 0.0 : parseFloat(input.row15) )  * 3) + ((isNaN(parseFloat(input.row16)) ? 0.0 : parseFloat(input.row16) ) * 1) + ((isNaN(parseFloat(input.row17)) ? 0.0 : parseFloat(input.row17) ) * 10) + ((isNaN(parseFloat(input.row18)) ? 0.0 : parseFloat(input.row18) ) * 5) + ((isNaN(parseFloat(input.row19)) ? 0.0 : parseFloat(input.row19) ) * 3) + ((isNaN(parseFloat(input.row20)) ? 0.0 : parseFloat(input.row20) ) * 1) + ((isNaN(parseFloat(input.row21)) ? 0.0 : parseFloat(input.row21) ) * 2.25) + ((isNaN(parseFloat(input.row22)) ? 0.0 : parseFloat(input.row22) ) * 3) + ((isNaN(parseFloat(input.row23)) ? 0.0 : parseFloat(input.row23) ) * 6) + ((isNaN(parseFloat(input.row24)) ? 0.0 : parseFloat(input.row24) ) * 2.2) + ((isNaN(parseFloat(input.row25)) ? 0.0 : parseFloat(input.row25) ) * 10) + ((isNaN(parseFloat(input.row26)) ? 0.0 : parseFloat(input.row26) ) * 5) + ((isNaN(parseFloat(input.row27)) ? 0.0 : parseFloat(input.row27) ) * 2)
  setGroundTotal(parseFloat(total))
}     
      
  return (
    <>
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>No.</th>
        <th>FIXTURE</th>
        <th>CONTROL TYPE</th>
        <th>BASEMENT</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Bathroom group</td>
        <td>Flush Tank</td>
        <td style={{padding:0}}><input type='number' step="0.01" style={{width:'100%'}} 
        onChange={(e) =>
          setInput({...input, row1: e.target.value })
        }
        value={input.row1}
        /></td>
      </tr>
      <tr>
      <td>2</td>
      <td>Bathroom group</td>
      <td>Flush Valve</td>
      <td>
      <input type='number' step="0.01" style={{width:'100%'}} 
        onChange={(e) =>
          setInput({...input, row2: e.target.value })
        }
        value={input.row2}
        />
      </td>
    </tr>
    <tr>
    <td>3</td>
    <td>Bathtub</td>
    <td>Faucet</td>
    <td>
    <input type='number' step="0.01" style={{width:'100%'}} 
    onChange={(e) =>
      setInput({...input, row3: e.target.value })
    }
    value={input.row3}
    />
    </td>
  </tr>
  <tr>
  <td>4</td>
  <td>Bathtub</td>
  <td>Faucet</td>
  <td>
  <input type='number' step="0.01" style={{width:'100%'}} 
  onChange={(e) =>
    setInput({...input, row4: e.target.value })
  }
  value={input.row4}
  />
  </td>
</tr>
<tr>
<td>5</td>
<td>Bidet</td>
<td>Faucet</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row5: e.target.value })
}
value={input.row5}
/>
</td>
</tr>
<tr>
<td>6</td>
<td>Combination fixture</td>
<td>Faucet</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row6: e.target.value })
}
value={input.row6}
/>
</td>
</tr>
<tr>
<td>7</td>
<td>Dishwashing machine</td>
<td>Automatic</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row7: e.target.value })
}
value={input.row7}
/>
</td>
</tr>
<tr>
<td>8</td>
<td>Drinking Fountain</td>
<td>3/8'' valve</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row8: e.target.value })
}
value={input.row8}
/>
</td>
</tr>
<tr>
<td>9</td>
<td>Kitchen sink</td>
<td>Faucet</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row9: e.target.value })
}
value={input.row9}
/>
</td>
</tr>
<tr>
<td>10</td>
<td>Kitchen sink</td>
<td>Faucet</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row10: e.target.value })
}
value={input.row10}
/>
</td>
</tr>
<tr>
<td>11</td>
<td>Laundry trays(1-3)</td>
<td>Faucet</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row11: e.target.value })
}
value={input.row11}
/>
</td>
</tr>
<tr>
<td>12</td>
<td>Lavaratory</td>
<td>Faucet</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row12: e.target.value })
}
value={input.row12}
/>
</td>
</tr>
<tr>
<td>13</td>
<td>Lavaratory</td>
<td>Faucet</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row13: e.target.value })
}
value={input.row13}
/>
</td>
</tr>
<tr>
<td>14</td>
<td>Service sink</td>
<td>Faucet</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row14: e.target.value })
}
value={input.row14}
/>
</td>
</tr>
<tr>
<td>15</td>
<td>Shower head</td>
<td>Mixing Valve</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row15: e.target.value })
}
value={input.row15}
/>
</td>
</tr>
<tr>
<td>16</td>
<td>Shower head</td>
<td>Mixing Valve</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row16: e.target.value })
}
value={input.row16}
/>
</td>
</tr>
<tr>
<td>17</td>
<td>Urinal</td>
<td>1'' flush valve</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row17: e.target.value })
}
value={input.row17}
/>
</td>
</tr>
<tr>
<td>18</td>
<td>Urinal</td>
<td>3/4'' flush valve</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row18: e.target.value })
}
value={input.row18}
/>
</td>
</tr>
<tr>
<td>19</td>
<td>Urinal</td>
<td>Flush Tank</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row19: e.target.value })
}
value={input.row19}
/>
</td>
</tr>
<tr>
<td>20</td>
<td>Washing Machine(8lb)</td>
<td>Automatic</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row20: e.target.value })
}
value={input.row20}
/>
</td>
</tr>
<tr>
<td>21</td>
<td>Washing Machine(8lb)</td>
<td>Automatic</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row21: e.target.value })
}
value={input.row21}
/>
</td>
</tr>
<tr>
<td>22</td>
<td>Washing Machine(15lb)</td>
<td>Automatic</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row22: e.target.value })
}
value={input.row22}
/>
</td>
</tr>
<tr>
<td>23</td>
<td>Water Closet</td>
<td>Flush Valve</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row23: e.target.value })
}
value={input.row23}
/>
</td>
</tr>
<tr>
<td>24</td>
<td>Water Closet</td>
<td>Flush Tank</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row24: e.target.value })
}
value={input.row24}
/>
</td>
</tr>
<tr>
<td>25</td>
<td>Water Closet</td>
<td>Flush Valve</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row25: e.target.value })
}
value={input.row25}
/>
</td>
</tr>
<tr>
<td>26</td>
<td>Water Closet</td>
<td>Flush Tank</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row26: e.target.value })
}
value={input.row26}
/>
</td>
</tr>
<tr>
<td>27</td>
<td>Water Closet</td>
<td>Flashometer tank</td>
<td>
<input type='number' step="0.01" style={{width:'100%'}} 
onChange={(e) =>
  setInput({...input, row27: e.target.value })
}
value={input.row27}
/>
</td>
</tr>
    </tbody>
  </Table>
  <center>
  <Button onClick={calculateBasementTotal} variant="contained" color="primary">Calculate</Button>
  </center>
  </>
  )
}

export default Second