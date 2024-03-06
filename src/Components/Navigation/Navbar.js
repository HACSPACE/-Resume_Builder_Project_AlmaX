import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tab, Tabs, useMediaQuery,useTheme } from '@mui/material';
import DraweComp from "./DrawerComp";
import { useSelector } from 'react-redux';


function NavBar() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('resumeTemplates'); // Set default active tab to "Resume Templates"
    let [isFormValid] = useState(true); // State to track form fill status
    const errorMessages = useSelector(state => state.dataStore.errorMessages);

    for (let key in errorMessages) {
        if (errorMessages[key] !== "") {
          isFormValid = false;
          break;
        }
    }

    useEffect(() => {
        // Extract the route name from the location path
        const routeName = location.pathname.split('/')[1];

        // Update activeTab based on the current route
        setActiveTab(routeName || 'resumeTemplates'); // Set default to "resumeTemplates" if no route name is found
    }, [location]);

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "White" }}>
            {/* Almabetter Logo for Desktop view And Responsive */}
            <Toolbar>
                {isMatch ?  (
                    <>
                        <Typography variant="h6" flexGrow={1}>
                            <img
                                src="https://api.sertifier.com/userdata/08daf47b-89e4-cd1d-208e-96834580c530/d747e244-cfe7-4a53-b0b4-47ad8e0d9ad4.png"
                                height="60px"
                                alt="AlmaBetter"
                            />
                        </Typography>

                        {/*  DrawerComponent for Responsive View */}
                        <DraweComp/>

                    </>


                ) : (

                    <>
                        <Typography variant="h6" flexGrow={1}>							
							<img
								src="https://api.sertifier.com/userdata/08daf47b-89e4-cd1d-208e-96834580c530/d747e244-cfe7-4a53-b0b4-47ad8e0d9ad4.png"
								height="60px"
								alt="AlmaBetter"
							/>							
						</Typography>

{/* Navbar links for Different Pages */}

                        <Tabs sx={{ marginLeft: "auto" }}>

                            <Tab
                                sx={{ color: !isFormValid ? "gray" : (activeTab === 'resumeTemplates' ? "blue" : "black"), fontWeight: activeTab === 'resumeTemplates' ? "bold" : "normal" }}
                                component={NavLink}
                                exact
                                to={"/"}
                                label="Resume Templates"
                                disabled={!isFormValid}
                            />
                            <Tab
                                sx={{ color: !isFormValid ? "gray" : (activeTab === 'myresume' ? "blue" : "black"), fontWeight: activeTab === 'myresume' ? "bold" : "normal" }}
                                component={NavLink}
                                to={"/myresume"}
                                label="My Resumes"
                                disabled={!isFormValid}
                            />
                            <Tab
                                sx={{ color: !isFormValid ? "gray" : (activeTab === 'about' ? "blue" : "black"), fontWeight: activeTab === 'about' ? "bold" : "normal" }}
                                component={NavLink}
                                to={"/about"}
                                label="About Us"
                                disabled={!isFormValid}
                            />
                        </Tabs>
                    </> 
                ) }
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
