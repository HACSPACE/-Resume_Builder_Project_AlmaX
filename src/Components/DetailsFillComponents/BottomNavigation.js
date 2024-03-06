import React from 'react';
// Importing necessary modules from Material-UI library
import { useDispatch } from 'react-redux';
import { Button, Grid } from '@mui/material';
import { updateState } from '../../ReduxManager/dataStoreSlice';
import { useLocation } from 'react-router-dom';
// BottomNavigation component definition
function BottomNavigation(props) {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div className='mt-2 px-5'>
      <hr />
      <Grid container spacing={2} justifyContent='space-between'>
        <Grid item xs={9} className='mt-4 d-flex justify-content-end'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              props.handleBack(); // Call handleBack function passed from parent
              dispatch(updateState({
                key: 'errorMessages',
                value: {}
              }));
            }}
            disabled={location.pathname === "/detailsfillingpage/personalinfo" || !props.isFormValid } // Disable when selectedNavItem is 'PersonalInfo'

          >
            Back
          </Button>
        </Grid>
        <Grid item xs={3} className='mt-4'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              if (!props.isFormValid) {
                alert('Please fill all the necessary details correctly!');
                dispatch(updateState({
                  key: 'showErrorMessages',
                  value: true
                }));
              } else {
                props.handleNext(); // Call handleNext function passed from parent
                dispatch(updateState({
                  key: 'showErrorMessages',
                  value: false
                }));
              }
            }}
          >
            {window.location.pathname === "/detailsfillingpage/keyskills" ? 'Preview' : 'Next'}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default BottomNavigation;
