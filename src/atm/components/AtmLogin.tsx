import { useEffect, useState } from 'react';
import { useLoginContext } from '../context/LoginContext';
import { useUserContext } from '../context/UserContext';

import { Box, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';

import axios from 'axios';
import AtmButton from '../pages/AtmButton';
import { AtmDeposit } from './AtmDeposit';
import { AtmWithDraw } from './AtmWithDraw';
import { AtmExit } from './AtmExit';

export const AtmLogin = () => {
  const [title, setTitle] = useState('Enter PIN');
  const [isShowOperations, setIsShowOperations] = useState(false);
  const [pinValue, setPinValue] = useState(0);

  const {state: loginState, dispatch: loginDispatch} = useLoginContext();
  const {state: userState, dispatch: userDispatch} = useUserContext();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (loginState.pin > 0) {
          setTitle('Re-Enter PIN');
          const response = await axios.get(`http://localhost:3001/user/${loginState.pin}`);
          const {pin, name, balance, funds, cardNumber} = response.data.user;
  
          userDispatch({type: 'SET_PIN', payload: pin});
          userDispatch({type: 'SET_NAME', payload: name});
          userDispatch({type: 'SET_BALANCE', payload: balance});
          userDispatch({type: 'SET_FUNDS', payload: funds});
          userDispatch({type: 'SET_CARD_NUMBER', payload: cardNumber});
          userDispatch({type: 'SET_ERROR', payload: ''});

          setIsShowOperations(true);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          userDispatch({type: 'SET_ERROR', payload: error.response?.data.message || 'PIN Incorrecto'});
        } else {
          userDispatch({type: 'SET_ERROR', payload: 'Ha ocurrido un error'});
        }

        setIsShowOperations(false);
      }
    }
  
    fetchUserData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginState.pin, userState.pin])
  

  const onSubmit = (e: any) => {
    e.preventDefault();
    loginDispatch({type: 'SET_PIN', payload: pinValue})
  };

  const allMovements = () => {
    if (isShowOperations) {
      return (
        <>
          <div>
            <AtmExit />
          </div>
          <div>
            <AtmWithDraw />
          </div>
          
          <div>
            <AtmDeposit />
          </div>
        </>
      )
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete='off'
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch'} }}
    >
      <div>
      <Grid container spacing={0}>
        {allMovements()}

        <Grid size={4} sx={{display: 'flex', marginLeft: 'auto'}}>
          <span>{title}</span>
          <TextField
            onChange={(e) => setPinValue(parseInt(e.target.value) )}
          />
          <AtmButton variant="contained" size="small" onClick={onSubmit}>.</AtmButton>
        </Grid>
      </Grid>
      </div>
    </Box>
  )
}
