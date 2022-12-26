function App() {

  const grid = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '6', '9'],
  ]
  
  const win = () => {
    //win cases
    const r0 = grid[0].join('');
    const r1 = grid[1].join('');
    const r2 = grid[2].join('');
    const c0 = grid[0][0].concat(grid[1][0]).concat(grid[2][0]);
    const c1 = grid[0][1].concat(grid[1][1]).concat(grid[2][1]);
    const c2 = grid[0][2].concat(grid[1][2]).concat(grid[2][2]);
    const d1 = grid[0][0].concat(grid[1][1]).concat(grid[2][2]);
    const d2 = grid[0][2].concat(grid[1][1]).concat(grid[2][0]);

    const winCases = [r0, r1, r2, c0, c1, c2, d1, d2];

    const winPlayer1 = winCases.filter(e => e == '111');
    const winPlayer2 = winCases.filter(e => e == '222');
    
    if(winPlayer1.length > 0) {
      console.log('gano player 1');
    }
    if(winPlayer2.length > 0) {
      console.log('gano player 2');
      
    }
  }

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
    </>
  );
}

export default App;
