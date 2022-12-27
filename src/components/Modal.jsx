import './Modal.css';

const Modal = ({ winner, player, tie }) => {
    return(
        <>
            {winner &&
                <>
                    <p className='modal__player'>{player == 'X' ? 'O' : 'X'}</p>
                    <p className='modal__result'>Win!!</p>
                </>
            }
            {tie &&
                <>
                    <p className='modal__player'>X - O</p>
                    <p className='modal__result'>Tie</p>
                </>
            }
        </>
    );
}

export default Modal;