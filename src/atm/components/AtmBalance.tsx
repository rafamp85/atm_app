import { useEffect } from 'react';
import { useUserContext } from '../context/UserContext';

import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';

import AtmButton from '../pages/AtmButton';

export const AtmBalance = () => {
  const {state} = useUserContext();

  useEffect(() => {
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.balance]);
  
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <Grid size={3} sx={{display: 'flex', marginRight: 'auto'}}>
            <span>Balance</span>
            <TextField value={state.balance} disabled />
            <AtmButton variant="contained" size="small" onClick={onSubmit}>.</AtmButton>
      </Grid>
    </>
    
  )
}
