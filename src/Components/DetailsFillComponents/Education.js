import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography, FormControl, Select, MenuItem, Container } from '@mui/material';
import TextField from '../InputComponents/TextField';
import { updateEducation, addArrayElement, removeArrayElement, updateErrorMessages } from '../../ReduxManager/dataStoreSlice';

function Education(props) {
    // Accessing education data from Redux store
    const educationHeads = useSelector(state => state.dataStore.education);
    const dispatch = useDispatch(); // Initializing dispatch function to dispatch actions to the Redux store

    // Handler function to update education data and error messages in Redux store
    const onChangeHandler = (key, value, index, errorMessage = undefined) => {
        dispatch(updateEducation({
            key: key,
            value: value,
            index: index,
        }));
        if (errorMessage !== undefined) {
            dispatch(updateErrorMessages({
                key: key,
                value: errorMessage,
                index: index,
            }));
        }
    };

    // Function to add a new education element to the Redux store
    function AddEducation() {
        dispatch(addArrayElement({
            key: 'education',
            element: {
                Type: "",
                University: "",
                Degree: "",
                Start: "",
                End: ""
            }
        }));
    }

    // Function to remove the last education element from the Redux store
    function RemoveEducation(props) {
        dispatch(removeArrayElement({ key: "education" }));
        dispatch(updateErrorMessages({ key: 'University', value: "", index: educationHeads.length - 1 }));
        dispatch(updateErrorMessages({ key: 'Degree', value: "", index: educationHeads.length - 1 }));
    }

     // Calculating the current year for selecting year range
    const currentYear = new Date().getFullYear();
    const yearRange = Array.from({ length: currentYear - 1999 }, (_, i) => currentYear - i); // Adjust the range as needed
    
    // Rendering component
    return (
        <Container >
            <Box style={{ padding: "15px", textAlign: "left", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 0px 20px 2px #000000" }}>
                <Typography variant="h5">Education Details</Typography>
                <hr />
                {educationHeads.map((educationHeading, index) => (
                    <Box key={index} sx={{ mt: 4 }}>
                        <Box className="container p-2 font" sx={{ textAlign: "left" }}>
                            <Typography variant="h6">Education {index + 1}</Typography>
                            <hr />
                            <Box className="row font">
                                <Box className="col-lg-6 col-12 pt-3 px-4">
                                    <label>Type</label>
                                    <FormControl fullWidth>
                                        <Select
                                            value={educationHeading.Type}
                                            onChange={(e) => {
                                                dispatch(updateEducation({
                                                    key: 'Type',
                                                    value: e.target.value,
                                                    index: index,
                                                }));
                                            }}
                                        >
                                            <MenuItem value='Graduation'>Graduation</MenuItem>
                                            <MenuItem value='Post Graduation'>Post Graduation</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box className="col-lg-6 col-12 pt-3 px-4">
                                    <label>University</label>
                                    <TextField
                                        type="text"
                                        elementId="University"
                                        placeholder='University'
                                        value={educationHeading.University}
                                        onChange={(value, errorMessage) => { onChangeHandler('University', value, index, errorMessage) }}
                                        validation={{ required: true }}
                                    />
                                </Box>
                            </Box>
                            <Box className="row font">
                                <Box className="col-lg-6 col-12 pt-3 px-4">
                                    <label>Degree</label>
                                    <TextField
                                        type="text"
                                        elementId="Degree"
                                        placeholder='Degree'
                                        value={educationHeading.Degree}
                                        onChange={(value, errorMessage) => { onChangeHandler('Degree', value, index, errorMessage) }}
                                        validation={{ required: true }}
                                    />
                                </Box>
                                <Box className="col-lg-6 col-12 pt-3 px-4">
                                    <label>Start year</label>
                                    <FormControl fullWidth>
                                        <Select
                                            value={educationHeading.Start}
                                            onChange={(e) => {
                                                const selectedStartYear = Math.min(currentYear, e.target.value);
                                                const selectedEndYear = Math.max(educationHeading.End, selectedStartYear);
                                                dispatch(updateEducation({
                                                    key: 'Start',
                                                    value: selectedStartYear,
                                                    index: index,
                                                }));
                                                dispatch(updateEducation({
                                                    key: 'End',
                                                    value: selectedEndYear,
                                                    index: index,
                                                }));
                                            }}
                                        >
                                            <MenuItem value="">Select year</MenuItem>
                                            {yearRange.map((yr, i) => (
                                                <MenuItem key={i} value={yr}>{yr}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box className="row font">
                                <Box className="col-lg-6 col-12 pt-3 px-4">
                                    <label>End year</label>
                                    <FormControl fullWidth>
                                        <Select
                                            value={educationHeading.End}
                                            onChange={(e) => {
                                                const selectedEndYear = Math.max(educationHeading.Start, e.target.value);
                                                dispatch(updateEducation({
                                                    key: 'End',
                                                    value: selectedEndYear,
                                                    index: index,
                                                }));
                                            }}
                                        >
                                            <MenuItem value="">Select year</MenuItem>
                                            {yearRange.filter(yr => yr >= educationHeading.Start).map((yr, i) => (
                                                <MenuItem key={i} value={yr}>{yr}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
                <Box sx={{ display: 'flex', mt: 3 }}>
                    <Button
                        variant="contained" color="primary" sx={{ mr: 2 }}
                        onClick={AddEducation}
                    >
                        Add new
                    </Button>
                    <Button
                        variant="contained" color="primary"
                        onClick={RemoveEducation}
                    >
                        Remove
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Education;
