function App() {
  
  const grid = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '6', '9'],
  ]

  //grid positions
  const p1 = grid[0][0];
  const p2 = grid[0][1];
  const p3 = grid[0][2];
  const p4 = grid[1][0];
  const p5 = grid[1][1];
  const p6 = grid[1][2];
  const p7 = grid[2][0];
  const p8 = grid[2][1];
  const p9 = grid[2][2];
  
  //win cases
  const r0 = grid[0].join('');
  const r1 = grid[1].join('');
  const r2 = grid[2].join('');
  const c0 = p1.concat(p4).concat(p7);
  const c1 = p2.concat(p5).concat(p8);
  const c2 = p3.concat(p6).concat(p9);
  const d1 = p1.concat(p5).concat(p9);
  const d2 = p3.concat(p5).concat(p7);

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
    console.log(indexRow, index);
  }

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <table>
        <tbody>
          {grid.map((row, indexRow) => 
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
