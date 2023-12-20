import React, { useContext, useState } from 'react';
import {Button , TextField , Grid , Typography , Container , Paper } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Notifications from './Notifications';
import {Assignment , Phone , PhoneDisabled} from '@mui/icons-material';
import {SocketContext} from '../SocketContext';
import {useMediaQuery} from '@mui/material';

const Options = () => {
  const {me , callAccepted , name , setName , callEnded , leaveCall , callUser} = useContext(SocketContext);
  const [idToCall , setIdToCall] = useState('');
  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <Container
    style={{
      width: isMobile?'80%':'600px',
      margin: '35px 0',
      padding: 0,

    }}>
     <Paper elevation={10}
      style={{
        padding: '10px 20px',
        border: '2px solid black',
      }}
        >
          <form noValidate autoComplete='off'
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          >
          <Grid container 
          style={{
            width: '100%',
            flexDirection:isMobile&&'column'
          }}
          >
            <Grid item xs={12} md={6} style={{ padding: 20,}}>
                <Typography gutterBottom variant='h6'>Account Info</Typography>
                <TextField label="Name" value = {name} onChange={(e)=> setName(e.target.value)}/>
                <CopyToClipboard text={me} style={{ marginTop: 20,background:'#000'}}>
                      <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize='large'/>}>Copy Your Id</Button>
                </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} style={{ padding: 20,}}>
                <Typography gutterBottom variant='h6'>Make A Call</Typography>
                <TextField label="ID TO CALL" value = {idToCall} onChange={(e)=> setIdToCall(e.target.value)}/>
                {callAccepted && !callEnded ? (
                      <Button 
                      variant='contained'
                      fullWidth 
                      startIcon={<PhoneDisabled fontSize="large"/>}
                      onClick={leaveCall}
                      style={{marginTop: 20,background:'#000'}}
                      >
                        Hang Up
                      </Button>
                ): (
                  <Button
                      variant='contained' 
                      color="primary" 
                      fullWidth 
                      startIcon={<Phone fontSize="large"/>}
                      onClick={() => callUser(idToCall)}
                      style={{marginTop: 20,background:'#000'}}
                      
                      >
                      Call
                  </Button>
                )}
            </Grid>
          </Grid>
          </form>
          <Notifications/>
        </Paper>
    </Container>
  )
}

export default Options