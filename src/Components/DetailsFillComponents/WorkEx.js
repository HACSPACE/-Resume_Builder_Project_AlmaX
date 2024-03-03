import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography, FormControl, Select, MenuItem, Container } from '@mui/material';
import TextField from '../InputComponents/TextField'; // Importing custom TextField component
import { updateWorkEx, addArrayElement, removeArrayElement, updateErrorMessages } from '../../ReduxManager/dataStoreSlice'; // Importing Redux actions

function WorkEx(props) {
    // Retrieving work experience data from Redux store
    const workHeads = useSelector(state => state.dataStore.workEx);
    const dispatch = useDispatch(); // Dispatch function to trigger Redux actions

    // Function to handle change in work experience data
    const onChangeHandler = (key, value, index, errorMessage = undefined) => {
        dispatch(updateWorkEx({
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

    // Function to add a new work experience entry
    function AddWorkEx() {
        dispatch(addArrayElement({
            key: 'workEx',
            element: {
                title: "",
                orgName: "",
                startYear: "",
                endYear: "",
                jobDescription: ""
            }
        }));
    }

    // Function to remove the last work experience entry
    function RemoveWorkEx() {
        dispatch(removeArrayElement({ key: "workEx" }));
        dispatch(updateErrorMessages({ key: 'title', value: "", index: workHeads.length - 1 }));
        dispatch(updateErrorMessages({ key: 'orgName', value: "", index: workHeads.length - 1 }));
    }

    // Generating an array of years for the year range
    const currentYear = new Date().getFullYear();
    const yearRange = Array.from({ length: currentYear - 1999 }, (_, i) => currentYear - i); // Adjust the range as needed

    // Rendering UI components
    return (
        <Container>
            <Box style={{ padding: "15px", textAlign: "left", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 0px 20px 2px #000000" }}>
                <Typography variant="h5">Work Experience</Typography>
                <hr />
                {workHeads.map((workHeading, index) => (
                    <Box key={index} sx={{ mt: 4 }}>
                        <Box className="container p-2 font" sx={{ textAlign: "left" }}>
                            <Typography variant="h6">Experience {index + 1}</Typography>
                            <hr />
                            <Box className="row font">
                                <Box className="col-lg-6 col-12 pt-3 px-4">
                                    <label>Job Title</label>
                                    <TextField
                                        type="text"
                                        elementId="title"
                                        placeholder="Enter Job Title"
                                        value={workHeading.title}
                                        onChange={(value, errorMessage) => onChangeHandler('title', value, index, errorMessage)}
                                        validation={{ required: true }}
                                    />
                                </Box>
                                <Box className="col-lg-6 col-12 pt-3 px-4">
                                    <label>Organization Name</label>
                                    <TextField
                                        type="text"
                                        elementId="orgName"
                                        placeholder="Enter Organization Name"
                                        value={workHeading.orgName}
                                        onChange={(value, errorMessage) => onChangeHandler('orgName', value, index, errorMessage)}
                                        validation={{ required: true }}
                                    />
                                </Box>
                            </Box>
                            <Box className="row font">
                                <Box className="col-lg-6 col-12 pt-3 px-4">
                                    <label>Start Year</label>
                                    <FormControl fullWidth>
                                        <Select
                                            value={workHeading.startYear}
                                            onChange={(e) => onChangeHandler('startYear', e.target.value, index)}
                                        >
                                            <MenuItem value="">Select Start Year</MenuItem>
                                            {yearRange.map((yr, i) => (
                                                <MenuItem key={i} value={yr}>{yr}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box className="col-lg-6 col-12 pt-3 px-4">
                                    <label>End Year</label>
                                    <FormControl fullWidth>
                                        <Select
                                            value={workHeading.endYear}
                                            onChange={(e) => {
                                                const selectedEndYear = Math.max(workHeading.startYear, e.target.value);
                                                dispatch(updateWorkEx({
                                                    key: 'endYear',
                                                    value: selectedEndYear,
                                                    index: index,
                                                }));
                                            }}
                                        >
                                            <MenuItem value="">Select End Year</MenuItem>
                                            {yearRange.filter(yr => yr >= workHeading.startYear).map((yr, i) => (
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
                    <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={AddWorkEx}>Add new</Button>
                    <Button variant="contained" color="primary" onClick={RemoveWorkEx}>Remove</Button>
                </Box>
            </Box>
        </Container>
    );
}

export default WorkEx;
