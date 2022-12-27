const Modal = ({ winner, player, tie }) => {
    return(
        <>
            {winner &&
                <div>
                    <p>{player == 'X' ? 'O' : 'X'}</p>
                    <p>Win!!</p>
                </div>
            }
            {tie &&
                <div>
                    <p>X - O</p>
                    <p>Tie</p>
                </div>
            }
        </>
    );
}

export default Modal;