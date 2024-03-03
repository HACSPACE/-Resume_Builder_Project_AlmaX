import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tab } from '@mui/material';

function NavBar() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('resumeTemplates'); // Set default active tab to "Resume Templates"

    useEffect(() => {
        // Extract the route name from the location path
        const routeName = location.pathname.split('/')[1];

        // Update activeTab based on the current route
        setActiveTab(routeName || 'resumeTemplates'); // Set default to "resumeTemplates" if no route name is found
    }, [location]);

    return (
        <AppBar position="static" sx={{ backgroundColor: "White" }}>
            <Toolbar>
                <Typography variant="h6" flexGrow={1}>
                    <img
                        src="https://api.sertifier.com/userdata/08daf47b-89e4-cd1d-208e-96834580c530/d747e244-cfe7-4a53-b0b4-47ad8e0d9ad4.png"
                        height="60px"
                        alt="AlmaBetter"
                    />
                </Typography>
                <Tab
                    sx={{ color: activeTab === 'resumeTemplates' ? "blue" : "black", fontWeight: activeTab === 'resumeTemplates' ? "bold" : "normal" }}
                    component={NavLink}
                    exact
                    to={"/"}
                    label="Resume Templates"
                />
                <Tab
                    sx={{ color: activeTab === 'myresume' ? "blue" : "black", fontWeight: activeTab === 'myresume' ? "bold" : "normal" }}
                    component={NavLink}
                    to={"/myresume"}
                    label="My Resumes"
                />
                <Tab
                    sx={{ color: activeTab === 'about' ? "blue" : "black", fontWeight: activeTab === 'about' ? "bold" : "normal" }}
                    component={NavLink}
                    to={"/about"}
                    label="About Us"
                />
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
