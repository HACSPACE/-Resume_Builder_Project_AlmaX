import React from 'react';
// Importing necessary hooks and components from React and Material-UI
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography, Container, Grid, TextField } from '@mui/material';

// Importing Redux actions
import { updateKeySkills, addArrayElement, removeArrayElement } from '../../ReduxManager/dataStoreSlice';

// KeySkills functional component
function KeySkills(props) {

    // Selecting the skills array from Redux state
    const skillHeads = useSelector(state => state.dataStore.skills);
    const dispatch = useDispatch();

    // Function to handle changes in the skillName TextField
    const handleChange = (index, value) => {
        dispatch(updateKeySkills({
            key: 'skillName',
            value: value,
            index: index,
        }));
    };

    // Function to handle adding a new skill to the skills array
    const handleAddSkill = () => {
        dispatch(addArrayElement({
            key: 'skills',
            element: { skillName: "" }
        }));
    };

    // Function to handle removing a skill from the skills array
    const handleRemoveSkill = () => {
        if (skillHeads.length > 1) {
            dispatch(removeArrayElement({ key: "skills" }));
        }
    };

    // Add an empty placeholder skill if the skills array is empty
    React.useEffect(() => {
        if (skillHeads.length === 0) {
            dispatch(addArrayElement({
                key: 'skills',
                element: { skillName: "" }
            }));
        }
    }, [dispatch, skillHeads]);

    // Rendering the component
    return (
        <Container sx={{ display: { md: "flex" }, mt: "50px" }} >
            <Box sx={{ padding: "15px", textAlign: "left", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 0px 20px 2px #000000" }}>
                <Typography variant="h4">Key Skills</Typography>
                <hr />
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    {skillHeads.map((item, index) => (
                        <React.Fragment key={index}>
                            <Grid item xs={6}>
                                <TextField
                                    type="text"
                                    value={item.skillName}
                                    placeholder={index === skillHeads.length - 1 ? "Add additional skill" : ""}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                />
                            </Grid>
                           
                        </React.Fragment>
                    ))}
                </Grid>
                <Box sx={{ mt: 3 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddSkill}
                    >
                        Add new
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleRemoveSkill}
                        disabled={skillHeads.length === 1}
                        sx={{ ml: 2 }}
                    >
                        Remove
                    </Button>
                </Box>
                
            </Box>
        </Container>
    );
}

export default KeySkills;
