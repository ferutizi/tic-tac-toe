import { useState, useEffect } from "react";

function App() {
  //game over cases
  const [winner, setWinner] = useState(false);
  const [tie, setTie] = useState(false);
  const [plays, setPlays] = useState(0);
  const [player, setPlayer] = useState('X');

  
  const initialGrid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
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

  useEffect(() => {
    const winPlayer1 = winCases.filter(e => e == 'XXX');
    const winPlayer2 = winCases.filter(e => e == 'OOO');
    
    if(winPlayer1.length > 0) {
      setWinner(true);
      console.log('gano player X');
    } else if(winPlayer2.length > 0) {
      setWinner(true);
      console.log('gano player O');
    } else if(plays == 9) {
      setTie(true)
      console.log('empate');
    }
  }, [gridValues])
  
  const move = (indexRow, index) => {
    let position = gridValues[indexRow][index]
    if(!winner && !tie && position == '') {
      setGridValues(
        [...gridValues],
        gridValues[indexRow][index] = player
      )
      setPlays(plays + 1)
      player === 'X' ? setPlayer('O') : setPlayer('X');
    }
  }

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <div>
      <table>
        <tbody>
          {gridValues.map((row, indexRow) => 
            <tr key={indexRow}>{row.map((item, index) =>
              <td key={index} onClick={() => move(indexRow, index)}>{item}</td>
              )}</tr>
            )}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default App;
