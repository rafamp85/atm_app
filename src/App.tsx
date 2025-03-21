
import './App.css';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { LoginProvider } from './atm/context/LoginContext';
import { AtmControlsCenter } from './atm/pages/AtmControlsCenter';
import { UserProvider } from './atm/context/UserContext';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container fixed>
        <LoginProvider>
          <UserProvider>
            <AtmControlsCenter />
          </UserProvider>
        </LoginProvider>
      </Container>
    </div>
  );
}

export default App;
