import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, FormControl, Select, MenuItem, Container, Grid } from '@mui/material';
import ProfilePicUploadComponent from './ProfileUpload';
import { stateNames } from '../Data/Data';
import TextField from '../InputComponents/TextField';
import TextArea from '../InputComponents/TextArea';

import { updatePersonalInfo, updateErrorMessages } from '../../ReduxManager/dataStoreSlice';


// PersonalInfo functional component
function PersonalInfo(props) {
    // Selecting personal information from Redux state
    const personalHeads = useSelector(state => state.dataStore.personalInfo);
    const dispatch = useDispatch();
    
     // Function to handle changes in personal information fields
    const onChangeHandler = (key, value, errorMessage = undefined) => {

        // Dispatching action to update personal information
        dispatch(updatePersonalInfo({
            key: key,
            value: value
        }));

        // Dispatching action to update error messages if any
        if (errorMessage !== undefined) {
            dispatch(updateErrorMessages({
                key: key,
                value: errorMessage
            }));
        }
    };

    // Rendering the component
    return (
        <Container sx={{ display: { md: "flex" }, mt: "20px" }}>
            <Box style={{ padding: "15px", textAlign: "left", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 0px 20px 2px #000000" }}>

                {/* Profile picture upload component */}
                <Box>
                    <ProfilePicUploadComponent />
                </Box>

                {/* Form for personal information */}
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography htmlFor="firstname" variant="body1">First Name*</Typography>
                        <TextField
                            type="text"
                            elementId="firstName"
                            placeholder="First name"
                            value={personalHeads.firstName || 'Arjun'}
                            onChange={(value, errorMessage) => onChangeHandler('firstName', value, errorMessage)}
                            validation={{ required: true }}
                        />
                    </Grid>
                     {/* Last Name */}
                    <Grid item xs={12} sm={6}>
                        <Typography htmlFor="lastname" variant="body1">Last Name</Typography>
                        <TextField
                            type="text"
                            elementId="lastName"
                            placeholder="Last name"
                            value={personalHeads.lastName || 'Prakash Mani'}
                            onChange={(value) => onChangeHandler('lastName', value)}
                        />
                    </Grid>

                    {/* Email */}
                    <Grid item xs={12} sm={6}>
                        <Typography htmlFor="staticEmail" variant="body1">Email*</Typography>
                        <TextField
                            type="text"
                            elementId="Email"
                            placeholder='users@example.com'
                            validation={{ checkType: 'email', required: true }}
                            value={personalHeads.Email || 'arjun.prakash@gmail.com'}
                            onChange={(value, errorMessage) => onChangeHandler('Email', value, errorMessage)}
                        />
                    </Grid>

                     {/* Mobile Number */}
                    <Grid item xs={12} sm={6}>
                        <Typography htmlFor="mobile" variant="body1">Mobile No.*</Typography>
                        <TextField
                            type="text"
                            elementId="Mobile"
                            validation={{ required: true }}
                            value={personalHeads.Mobile || '+91 8189966699'}
                            onChange={(value, errorMessage) => onChangeHandler('Mobile', value, errorMessage)}
                            onBlur={(e) => {
                                const inputValue = e.target.value.trim();
                                if (inputValue.length < 4) {
                                    // If the input length is less than 4 (length of "+91 "), set the value back to the default value
                                    onChangeHandler('Mobile', '+91 8189966699');
                                } else if (inputValue.length === 13 && inputValue.startsWith("+91") && !isNaN(inputValue.slice(4))) {
                                    // If the input length is 13 and starts with "+91", preserve the value
                                    onChangeHandler('Mobile', inputValue);
                                } else if (inputValue.length === 10 && !isNaN(inputValue)) {
                                    // If the input length is 10 and numeric, add the "+91" prefix
                                    onChangeHandler('Mobile', `+91 ${inputValue}`);
                                } else {
                                    // Reset field if input is invalid
                                    onChangeHandler('Mobile', '');
                                }
                            }}
                        />
                    </Grid>

                        {/* Address */}
                    <Grid item xs={12}>
                        <Typography htmlFor="inputAddress" variant="body1">Address</Typography>
                        <TextField
                            type="text"
                            elementId="Address"
                            value={personalHeads.Address || 'Selvapuram'}
                            onChange={(value) => onChangeHandler('Address', value)}
                        />
                    </Grid>

                    {/* City */}
                    <Grid item xs={6}>
                        <Typography htmlFor="inputCity" variant="body1">City*</Typography>
                        <TextField
                            type="text"
                            elementId="City"
                            validation={{ required: true }}
                            value={personalHeads.City || 'Tiruppur'}
                            onChange={(value, errorMessage) => onChangeHandler('City', value, errorMessage)}
                        />
                    </Grid>

                     {/* State */}
                    <Grid item xs={6}>
                        <Typography htmlFor="inputState" variant="body1">State</Typography>
                        <FormControl fullWidth>
                            <Select
                                id="State"
                                value={personalHeads.State || 'Tamil Nadu'}
                                onChange={(e) => onChangeHandler('State', e.target.value)}
                            >
                                {stateNames.map((state, i) => (
                                    <MenuItem key={i} value={state}>{state}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                     {/* Pincode */}
                    <Grid item xs={6}>
                        <Typography htmlFor="pin" variant="body1">Pincode</Typography>
                        <TextField
                            type="number"
                            elementId="Pin"
                            value={personalHeads.Pin || '614607'}
                            onChange={(value) => onChangeHandler('Pin', value)}
                        />
                    </Grid>


                     {/* Objective */}
                    <Grid item xs={12}>
                        <Typography htmlFor="Objective" variant="body1">Objective</Typography>
                        <TextArea
                            
                            elementId="Objective"
                            rows="3"
                            value={personalHeads.Objective || 'Take a Tour of our Full Stack Web Devloper to learn about curriculam, assesements and projects designed to help you build a career in Web Devlopment.'}
                            onChange={(value) => onChangeHandler('Objective', value)}
                        />
                    </Grid>
                </Grid>
                
            </Box>
        </Container>
    );
}

export default PersonalInfo;
