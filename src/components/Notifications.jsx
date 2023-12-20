import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { SocketContext } from '../SocketContext';
import RingVolumeIcon from '@mui/icons-material/RingVolume';

const Notifications = () => {
  const {answerCall , callAccepted , call} = useContext(SocketContext);
  return (
    <div>
        {call.isReceivingCall && !callAccepted && (
          <div
          style={{display:'flex' ,justifyContent:'center'}}
          >
              <h1 style={{fontSize:'`60px' , fontFamily:'Poppins' , marginRight:'10px'}}>{call.name} is Calling</h1>
              <Button  variant='contained' style={{background:'#000'}} onClick={answerCall}>
                      <RingVolumeIcon/>
              </Button>
          </div>
        )}
    </div>
  )
}

export default Notifications