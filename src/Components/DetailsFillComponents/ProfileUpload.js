import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Input, Typography, Avatar } from "@mui/material";
import { updateState } from "../../ReduxManager/dataStoreSlice"; 
import defaultProfile from "../Data/images/profile.jpg"; // Importing default profile image


function App() {
    // Using Redux hooks to access and dispatch actions
    const imageFile = useSelector((state) => state.dataStore.imageFile); // Getting image file from Redux store

    // Function to dispatch actions to Redux store

    const dispatch = useDispatch(); 
    // Function to handle file input change
    function handleChange(e) {
        let file = e.target.files[0]; // Get the selected file
        const fileType = file["type"]; // Get the type of the selected file
        const validImageTypes = ["image/gif", "image/jpeg", "image/png"]; // Array of valid image file types
        if (validImageTypes.includes(fileType)) { // Check if the selected file type is valid
            let temp = URL.createObjectURL(file); // Create a temporary URL for the selected file

            dispatch(
                updateState({
                    key: "imageFile",
                    value: temp, // Update Redux store with the temporary URL of the selected image
                })
            );
        } else {
            alert("Uploaded file type should be jpg/png!"); // Alert user if the selected file type is not valid
        }
    }

    // Rendering UI components
    return (
        <Box className="container">
            <Box className="row" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 1 }}>
                <Avatar
                    sx={{
                        width: 150,
                        height: 150,
                        marginRight: 1,
                        borderRadius: '50%', // Apply border radius for rounded Avatar
                    }}
                    alt="profile"
                    src={imageFile || defaultProfile} // Set the source of the Avatar component to the selected image file or default profile image
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="body1" component="label" htmlFor="fileInput" sx={{ cursor: 'pointer', color: 'blue', marginBottom: 1 }}>
                        Change Profile Photo
                    </Typography>
                    <Input
                        id="fileInput"
                        type="file"
                        onChange={handleChange} // Call handleChange function when the file input changes
                        inputProps={{ accept: "image/*", style: { display: 'none' } }} // Set input properties to accept image files only and hide the input element
                    />
                </Box>
            </Box>
        </Box>
    );
}
export default App;
