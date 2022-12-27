const RestartButton = ({ setWinner, setTie, setPlays, setPlayer, setModal, setGridValues, initialGrid }) => {

    const restart = () => {
        setWinner(false)
        setTie(false)
        setPlays(0)
        setPlayer('X')
        setModal(false)
        setGridValues(initialGrid)
    };

    return(
        <button onClick={() => restart()}>restart</button>
    );
}

export default RestartButton;