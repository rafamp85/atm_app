import { Box } from '@mui/material'
import { AtmLogin } from './AtmLogin'
import { useUserContext } from '../context/UserContext';
import { useEffect, useState } from 'react';

export const AtmOperations = () => {
    
  const [title, setTitle] = useState('Welcome to the ATM');
  const [subTitle, setSubTitle] = useState('');

  // Use context to get saved data
  const {state} = useUserContext();
  const {pin, name, balance, funds, cardNumber, error} = state;
    
  useEffect(() => {
    if (pin !== 0) {
        setTitle(`Hi ${name}! Please make a choice...`);
        setSubTitle(`Your balance is ${balance} and your funds are ${funds}`);
    }

    if (error) {
        setTitle(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pin, balance, funds, error])
  
  

  return (
    <>  
        <Box sx={{bgcolor: "#92C5FC", border: '6px solid #d7d7d7', width: "100%", padding: '20px 0px' }}>
            <h1 style={{color: '#fff'}}>{title}</h1>
            <h4 style={{color: '#fff'}}>{subTitle}</h4>

            <section>
                <AtmLogin />
            </section>
        </Box>
    </>
  )
}
