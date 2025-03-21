import { useEffect, useState } from 'react';
import { useLoginContext } from '../context/LoginContext';
import { useUserContext } from '../context/UserContext';

import { Box, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';

import axios from 'axios';
import AtmButton from '../pages/AtmButton';

export const AtmDeposit = () => {
  const [amount, setAmount] = useState(0);
  const [deposit, setDeposit] = useState(0);

  const {state: loginState, dispatch: loginDispatch} = useLoginContext();
  const {dispatch: userDispatch} = useUserContext();

  useEffect(() => {
    const depositMoney = async () => {
      try {
        if (deposit > 0) {
          const response = await axios.post(`http://localhost:3001/add-funds`, {
            pin: loginState.pin,
            amount: deposit
          });

          const {balance, funds} = response.data.user;
          userDispatch({type: 'SET_BALANCE', payload: balance});
          userDispatch({type: 'SET_FUNDS', payload: funds});
          userDispatch({type: 'SET_ERROR', payload: ''});
          userDispatch({type: 'SET_ERROR', payload: ''});
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          userDispatch({type: 'SET_ERROR', payload: error.response?.data.message || 'PIN Incorrecto'});
        } else {
          userDispatch({type: 'SET_ERROR', payload: 'Ha ocurrido un error'});
        }
      }
    }

    depositMoney();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deposit]);
  
  const onSubmit = (e: any) => {
    e.preventDefault();
    setDeposit(amount);
  };

  return (
    <Grid size={6} sx={{display: 'flex', marginRight: 'auto'}}>
          <AtmButton variant="contained" size="small" onClick={onSubmit}>.</AtmButton>
          <TextField onChange={(e) => setAmount(parseInt(e.target.value) )} />
          <span>Deposit</span>
    </Grid>
  )
}
