import { useUserContext } from '../context/UserContext';

import Grid from '@mui/material/Grid2';

import AtmButton from '../pages/AtmButton';
import { useLoginContext } from '../context/LoginContext';
import { TextField } from '@mui/material';

export const AtmExit = () => {
  const {dispatch: loginDispatch} = useLoginContext();
  const {dispatch: userDispatch} = useUserContext();
  
  const onSubmit = (e: any) => {
    e.preventDefault();
    userDispatch({type: 'RESET'});
    loginDispatch({type: 'SET_PIN', payload: 0});
  };

  return (
    <>
      <Grid size={3} sx={{display: 'flex', marginRight: 'auto'}}>
        <span>Exit</span>
        <TextField disabled />
        <AtmButton variant="contained" size="small" onClick={onSubmit}>.</AtmButton>
      </Grid>
    </>
    
  )
}
