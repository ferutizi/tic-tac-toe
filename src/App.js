import { useState } from "react";

function App() {
  
  const initialGrid = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
  ];

  const [gridValues, setGridValues] = useState(initialGrid)

  //grid positions
  const p1 = gridValues[0][0];
  const p2 = gridValues[0][1];
  const p3 = gridValues[0][2];
  const p4 = gridValues[1][0];
  const p5 = gridValues[1][1];
  const p6 = gridValues[1][2];
  const p7 = gridValues[2][0];
  const p8 = gridValues[2][1];
  const p9 = gridValues[2][2];
  
  
  //win cases
  const r0 = p1 + p2 + p3;
  const r1 = p4 + p5 + p6;
  const r2 = p7 + p8 + p9;
  const c0 = p1 + p4 + p7;
  const c1 = p2 + p5 + p8;
  const c2 = p3 + p6 + p9;
  const d1 = p1 + p5 + p9;
  const d2 = p3 + p5 + p7;

  const winCases = [r0, r1, r2, c0, c1, c2, d1, d2];

  const win = (winCases) => {
    const winPlayer1 = winCases.filter(e => e == '111');
    const winPlayer2 = winCases.filter(e => e == '222');
    
    if(winPlayer1.length > 0) {
      console.log('gano player 1');
    }
    if(winPlayer2.length > 0) {
      console.log('gano player 2');
    }
  }

  const move = (indexRow, index) => {
    console.log(gridValues);
    console.log(gridValues[indexRow][index]);
    
    setGridValues(
      [...gridValues],
      gridValues[indexRow][index] = 'x'
    )
  }

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <table>
        <tbody>
          {gridValues.map((row, indexRow) => 
            <tr key={indexRow}>{row.map((item, index) =>
              <td key={index} onClick={() => move(indexRow, index)}>{item}</td>
              )}</tr>
            )}
        </tbody>
      </table>
    </>
  );
}

export default App;
