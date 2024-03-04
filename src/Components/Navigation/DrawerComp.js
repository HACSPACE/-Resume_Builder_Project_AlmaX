import MenuIcon from "@mui/icons-material/Menu"
import { Drawer, IconButton, ListItemButton, 
 Tab, Typography, Divider, List}
 from "@mui/material";
import { NavLink, useLocation } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";

// Menu of Navbar for Mobile Width

const DrawerComp = () => {
    const [openDrawer, setopenDrawer] = useState(false);
    // const [selectedIndex, serSelectedIndex] = useState(0);
    const location = useLocation();
    // Set default active tab to "Resume Templates"
    const [activeTab, setActiveTab] = useState('resumeTemplates'); 

    useEffect(() => {
        // Extract the route name from the location path
        const routeName = location.pathname.split('/')[1];

        // Update activeTab based on the current route
        setActiveTab(routeName || 'resumeTemplates'); // Set default to "resumeTemplates" if no route name is found
    }, [location]);

    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>

                <Typography sx={{ marginRight: "auto" }} variant="h5" flexGrow={1}>
					<img
						src="https://api.sertifier.com/userdata/08daf47b-89e4-cd1d-208e-96834580c530/d747e244-cfe7-4a53-b0b4-47ad8e0d9ad4.png"
						height="50px"
						width="100%"
						alt="AlmaBetter"
					/>
				</Typography>
                <Divider />
                <List sx={{ marginBottom: "1000px"}}>
                    <ListItemButton>

                        <Tab
                            sx={{ color: activeTab === 'resumeTemplates' ? "blue" : "black", fontWeight: activeTab === 'resumeTemplates' ? "bold" : "normal" }}
                            component={NavLink}
                            exact
                            to={"/"}
                            label="Resume Templates"
                        />
                    </ListItemButton>
                        <ListItemButton>
                        <Tab
                        sx={{ color: activeTab === 'myresume' ? "blue" : "black", fontWeight: activeTab === 'myresume' ? "bold" : "normal" }}
                        component={NavLink}
                        to={"/myresume"}
                        label="My Resumes"
                        />
                    </ListItemButton>
                    <ListItemButton>
                        <Tab
                        sx={{ color: activeTab === 'about' ? "blue" : "black", fontWeight: activeTab === 'about' ? "bold" : "normal" }}
                        component={NavLink}
                        to={"/about"}
                        label="About Us"
                        />
                    </ListItemButton>


                </List>
            </Drawer>
            <IconButton
                sx={{ color: "black", marginLeft: "auto" }}
				onClick={() => setopenDrawer(!openDrawer)}>
				<MenuIcon sx={{ color: "black"  }} />
            </IconButton>


        </React.Fragment>
    );

};

export default DrawerComp;