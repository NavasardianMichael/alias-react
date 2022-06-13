import { Button, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from './assets/images/logo.png'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='upper-section'>
        <IconButton color='primary' size='large'>
          <SettingsIcon />
        </IconButton>
      </div>
      <div className='middle-section'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='lower-section'>
        <Button variant="contained" size='large'>Play</Button>
      </div>
    </div>
  );
}
export default App;