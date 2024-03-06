import MenuIcon from "@mui/icons-material/Menu"
import { Drawer, IconButton, ListItemButton, 
 Tab, Typography, Divider, List}
 from "@mui/material";
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';


// Menu of Navbar for Mobile Width

const DrawerComp = () => {
    const [openDrawer, setopenDrawer] = useState(false);
    const location = useLocation();
    // Set default active tab to "Resume Templates"
    const [activeTab, setActiveTab] = useState('resumeTemplates'); 

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
                            sx={{ color: !isFormValid ? "gray" : (activeTab === 'resumeTemplates' ? "blue" : "black"), fontWeight: activeTab === 'resumeTemplates' ? "bold" : "normal" }}
                            component={NavLink}
                            exact
                            to={"/"}
                            label="Resume Templates"
                            disabled={!isFormValid}
                        />
                    </ListItemButton>
                    <ListItemButton>
                        <Tab
                            sx={{ color: !isFormValid ? "gray" : (activeTab === 'myresume' ? "blue" : "black"), fontWeight: activeTab === 'myresume' ? "bold" : "normal" }}
                            component={NavLink}
                            to={"/myresume"}
                            label="My Resumes"
                            disabled={!isFormValid}
                        />
                    </ListItemButton>
                    <ListItemButton>
                        <Tab
                            sx={{ color: !isFormValid ? "gray" : (activeTab === 'about' ? "blue" : "black"), fontWeight: activeTab === 'about' ? "bold" : "normal" }}
                            component={NavLink}
                            to={"/about"}
                            label="About Us"
                            disabled={!isFormValid}
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