import { useUserContext } from '../context/UserContext';

import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';

import AtmButton from '../pages/AtmButton';

export const AtmExit = () => {
  const {dispatch: userDispatch} = useUserContext();
  
  const onSubmit = (e: any) => {
    e.preventDefault();
    userDispatch({type: 'RESET'});
  };

  return (
    <>
      <Grid size={8} sx={{display: 'flex', marginLeft: '550px'}}>
        <span>Exit</span>
          <AtmButton variant="contained" size="small" onClick={onSubmit}>.</AtmButton>
      </Grid>
    </>
    
  )
}
