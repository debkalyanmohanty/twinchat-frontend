import {Typography , AppBar} from '@mui/material';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import {useMediaQuery} from '@mui/material';
import {GiKangaroo} from 'react-icons/gi';
import { PiBabyBold } from 'react-icons/pi';

function App() {
  const isMobile = useMediaQuery('(max-width:600px)')
  return (
    <div 
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      
      
    }}>
    <AppBar
     style={{
        borderRadius:15,
        borderRadius: 15,
        margin: isMobile?'auto':'30px 100px' ,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: isMobile?'90%':'600px',
        border: '2px solid black',
  
     }}
     position='static' 
     color="inherit">
        
    <Typography variant='h3' align="center">TWIN CHAT <PiBabyBold size="3rem"/> <GiKangaroo size="3rem"/> </Typography>
    </AppBar>
    <VideoPlayer/>
    <Options/>
        
    </div>
  );
}

export default App;
