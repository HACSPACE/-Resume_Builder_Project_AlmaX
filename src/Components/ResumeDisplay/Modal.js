import React from 'react';
import Dialog from '@mui/material/Dialog'; 
import DialogTitle from '@mui/material/DialogTitle'; 
// import DialogContent from '@mui/material/DialogContent'; 
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
 

function SuccessMessage(props) {
  // Rendering the modal using Dialog component
  return (
    <Dialog open={props.showModal} onClose={() => props.setShowModal(false)}> 
    {/* Setting open prop to control the visibility of the modal */}
      <DialogTitle>
        {/* Rendering CheckCircleFillIcon component with blue color */}
        <CheckCircleIcon style={{ color: "blue", marginRight: "8px" }} /> 
         {/* Modal title */}
        Your Resume has been successfully downloaded!!
        
      </DialogTitle>
      
      <DialogActions>
        <Button onClick={() => props.setShowModal(false)} color="secondary"> {/* Close button with onClick event handler to close the modal */}
          Close 
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SuccessMessage;
