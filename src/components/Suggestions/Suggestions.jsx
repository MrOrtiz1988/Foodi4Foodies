import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

function Suggestions() {
    //This retrieves the 5 random suggestions from the store
    const suggestions = useSelector(store => store.suggestions);
    //This state will be used for toggling purposes
    const [is_suggest, setIs_suggest] = useState(false);
    const dispatch = useDispatch();
    //reRoll makes the suggestions reducer re-generate the list of suggestions
    const reRoll = () => {
        dispatch({ type: 'REROLL' });
    }
    //This will be my toggle for the suggestions button on the DOM goes between
    //suggestions being hidden to it being displayed
    const suggestToggle = () => {
        if (!is_suggest) {
            setIs_suggest(true);
        } else {
            setIs_suggest(false);
        }
    }
    //This will send to the server the value that got clicked on instead of having to type
    //it in the search input
    const chosen = (type) => {
        dispatch({
            type: 'SAGA/SEARCH',
            payload: type
        })
        handleClose();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <h4>Dont know what to eat? Click the suggestions button</h4>
            <Button
                size="large"
                onClick={handleOpen}
                variant="outlined">
                Suggestions
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2 className='suggestion-header'>Suggestions</h2>
                    <div className='suggestions-div'>
                        {
                            suggestions.map((type, i) => {
                                return (
                                    <h3 className='suggestions' onClick={() => chosen(type)} key={i}>{type}</h3>
                                )
                            })
                        }
                    </div>
                    <Button id='re-roll' onClick={reRoll} variant="outlined">Re-Roll</Button>
                </Box>
            </Modal>
        </div>
    );


    // return (
    //     <div>
    //         <h4>Dont know what to eat? Click the suggestions button</h4>
    //         <Button onClick={BasicModal} variant="outlined">suggestions new</Button>
    //         {!is_suggest ?
    //             <Button onClick={suggestToggle} variant="outlined">Suggestions</Button>
    //             : <Button onClick={suggestToggle} variant="outlined">Close</Button>}

    //         {is_suggest &&
    //             suggestions.map((type, i) => {
    //                 return (
    //                     <p onClick={() => chosen(type)} key={i}>{type}</p>
    //                 )
    //             })
    //         }
    //         {is_suggest && <Button onClick={reRoll} variant="outlined">Re-Roll</Button>}
    //     </div>
    // )
}

export default Suggestions