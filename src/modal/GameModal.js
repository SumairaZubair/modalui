// // import '../modal/GameModal.css'
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import ClearIcon from '@mui/icons-material/Clear';
// const style = {
//   position: 'absolute' ,
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
// //   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };
// const GameModal = () => {

//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
  
//   return (
//     <div>
//         <Button onClick={handleOpen}>Open modal</Button>
// <Modal
//   open={open}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
// >
//   <Box sx={style}>
//     <ClearIcon className='clearIcon' onClose={handleClose}/>
//     <Typography id="modal-modal-title" variant="h6" component="h2">
//       Text in a modal
//     </Typography>
//     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//     </Typography>
//   </Box>
// </Modal>
//     </div>
//   )
// }

// export default GameModal


import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import '../modal/GameModal.css'
import { styled } from '@mui/material/styles'; 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
// import { Padding } from '@mui/icons-material';
// import { ButtonBase } from '@mui/material';
// import { makeStyles } from '@mui/styles';
const MyButton = styled(Button)
// const useStyles = makeStyles((theme) => ({
//   // Define a class for the button with no hover effect
//   buttonNoHover: {
//     '&:hover': {
//       backgroundColor: 'transparent', // Set the background color to transparent on hover
//       boxShadow: 'none', // Remove the box shadow on hover
//       color: theme.palette.primary.main, // Customize text color on hover if needed
//     },
//   },
// }));



const GameModal = () => {
    // const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-modal-title"
        aria-describedby="responsive-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow:
              '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
            padding: '32px',
            width: '75%',
            maxWidth: '400px', // Limit the maximum width for larger screens
          }}
        >
              <ClearIcon className='clearIcon' onClick={handleClose} />
          {/* <h2 id="responsive-modal-title">Responsive Modal</h2>
          <p id="responsive-modal-description">
            Content of your responsive modal goes here.
          </p> */}
       <div className='buttons'>
       <Button id='facebookBtn' >
        <div>
        <FacebookOutlinedIcon className='icons' style={{fontSize:'35px'}}/>
        <p>Sign in with facebook</p>
        </div>
        </Button>
          <Button id='googleBtn' >
         <div>
        <img width="35" height="35" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" className='icons'/> 
        <p className='btnPara'>Sign in with Google</p>
         </div>       
         </Button>
          <Button id='phoneBtn' >
        <div>
         <SmartphoneOutlinedIcon className='icons' style={{fontSize:'35px'}}/>
         <p>Sign in with Phone</p>
         </div>
         </Button>
         <div className='connect'>
             <p className='line'></p>
             <p className='connectPara'>Or Connect With</p>
             <p className='line'></p>
         </div>
         <div className='msgIcons'>
            <div className='icondiv'>
            <img width="25" height="25" src="https://img.icons8.com/ios/50/speech-bubble--v1.png" alt="speech-bubble--v1" className='msgg'/></div>
            <div className='icondiv'>
            <img width="25" height="25" src="https://img.icons8.com/ios/50/speech-bubble--v1.png" alt="speech-bubble--v1"/>
            </div>
            <div className='icondiv'>
            <img width="25" height="25" src="https://img.icons8.com/ios/50/speech-bubble--v1.png" alt="speech-bubble--v1"/>
            </div>
            <div className='icondiv'>
            <img width="25" height="25" src="https://img.icons8.com/ios/50/speech-bubble--v1.png" alt="speech-bubble--v1"/>
            </div>

         </div>

       </div>

        </div>
      </Modal>
    </div>
  );
};

export default GameModal;
