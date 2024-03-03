
import React, { useState, useEffect } from 'react';
import { NavLink, Routes, Route, useNavigate , useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import PersonalInfo from './PersonalInfo';
import WorkEx from './WorkEx';
import Education from './Education';
import KeySkills from './KeySkills';

import { Box, Stack, Container, List, ListItemButton } from "@mui/material";
import BottomNavigation from './BottomNavigation';

function DetailsFillingPage(props) {

  // React hooks to manage state and access routing functionality
  const location = useLocation();
  const navigate = useNavigate(); // Hook to perform navigation
  const [selectedNavItem, setSelectedNavItem] = useState('PersonalInfo'); // State to keep track of selected nav item

  // Redux hook to access error messages from the Redux stor
  const errorMessages = useSelector(state => state.dataStore.errorMessages);

  useEffect(() => {
    // Update selectedNavItem based on the current route path
    const pathname = location.pathname;
    if (pathname === "/detailsfillingpage/workex") {
      setSelectedNavItem('WorkEx');
    } else if (pathname === "/detailsfillingpage/education") {
      setSelectedNavItem('Education');
    } else if (pathname === "/detailsfillingpage/keyskills") {
      setSelectedNavItem('KeySkills');
    } else {
      setSelectedNavItem('PersonalInfo');
    }
  }, [location.pathname]);

  // Check if the form is valid based on error messages
  let isFormValid = true;
  for (let key in errorMessages) {
    if (errorMessages[key] !== "") {
      isFormValid = false;
      break;
    }
  }

  // Function to handle navigation when the Back button is clicked

  const handleBack = () => {
    // Define logic to handle navigation when Back button is clicked
    if (selectedNavItem === 'WorkEx') {
      navigate('/detailsfillingpage/personalinfo');
      setSelectedNavItem('PersonalInfo');
    } else if (selectedNavItem === 'Education') {
      navigate('/detailsfillingpage/workex');
      setSelectedNavItem('WorkEx');
    } else if (selectedNavItem === 'KeySkills') {
      navigate('/detailsfillingpage/education');
      setSelectedNavItem('Education');
    }
  }

  // Function to handle navigation when the Next button is clicked
  const handleNext = () => {
    // Define logic to handle navigation when Next button is clicked
    if (selectedNavItem === 'PersonalInfo') {
      navigate('/detailsfillingpage/workex');
      setSelectedNavItem('WorkEx');
    } else if (selectedNavItem === 'WorkEx') {
      navigate('/detailsfillingpage/education');
      setSelectedNavItem('Education');
    } else if (selectedNavItem === 'Education') {
      navigate('/detailsfillingpage/keyskills');
      setSelectedNavItem('KeySkills');
    }
    else if (selectedNavItem === 'KeySkills') {
      navigate('/myresume'); // Navigate to the MyResumePreview component
      setSelectedNavItem('MyResume'); 
    }
  }

  // Function to handle clicking on side navigation links
  const onSideNavLinkClick = (itemName) => {
    setSelectedNavItem(itemName); // Update selected nav item
  }

  // Function to style the navigation items based on the current rout
   const getNavItemStyle = (itemName) => {
    return {
      textDecoration: "none",
      fontWeight: "bold",
      letterSpacing: 2,
      display: "flex",
      alignItems: "center",
      color: location.pathname.includes(itemName.toLowerCase()) ? "blue" : "black",
      borderLeft: location.pathname.includes(itemName.toLowerCase()) ? "2px solid blue" : "none",
      paddingLeft: location.pathname.includes(itemName.toLowerCase()) ? "10px" : "0",
    };
  };
  

  return (
    <div>

      {/* Container for the page layout */}
      <Container sx={{ display: { md: "flex" }, mt: "20px" }}>
        <Box>

          {/* Side navigation */}
          <Stack
            sx={{
              width: "300px",
              borderRadius: "20px",
              boxShadow: "0 0px 20px 2px #000000",
              padding: "20px",
              backgroundColor: "white",
              margin: "50px",
            }}
          >

            {/* Personal Details navigation link */}
            <List
              sx={{
                borderRadius: "12px",
                boxShadow: "0px 0px 5px 0.1px",
                padding: "0px 0px",
                margin: "10px 0px",
                fontWeight: "bold",
              }}
            >
              <ListItemButton>
                <NavLink
                  onClick={() => onSideNavLinkClick('PersonalInfo')}
                  to={isFormValid ? "/detailsfillingpage/personalinfo" : '#'}
                  style={getNavItemStyle('PersonalInfo')}
                >
                  Personal Details
                </NavLink>
              </ListItemButton>
            </List>

            {/* Work Experience navigation link */}
            <List
              sx={{
                borderRadius: "12px",
                boxShadow: "0px 0px 5px 0.1px",
                padding: "0px 0px",
                margin: "10px 0px",
                fontWeight: "bold",
              }}
            >
              <ListItemButton>
                <NavLink
                  onClick={() => onSideNavLinkClick('WorkEx')}
                  to={isFormValid ? "/detailsfillingpage/workex" : '#'}
                  style={getNavItemStyle('WorkEx')}
                >
                  Work Experience
                </NavLink>
              </ListItemButton>
            </List>

            {/* Education navigation link */}
            <List
              sx={{
                borderRadius: "12px",
                boxShadow: "0px 0px 5px 0.1px",
                padding: "0px 0px",
                margin: "10px 0px",
                fontWeight: "bold",
              }}
            >
              <ListItemButton>
                <NavLink
                  onClick={() => onSideNavLinkClick('Education')}
                  to={isFormValid ? "/detailsfillingpage/education" : '#'}
                  style={getNavItemStyle('Education')}
                >
                  Education
                </NavLink>
              </ListItemButton>
            </List>

            {/* Key Skills navigation link */}
            <List
              sx={{
                borderRadius: "12px",
                boxShadow: "0px 0px 5px 0.1px",
                padding: "0px 0px",
                margin: "10px 0px",
                fontWeight: "bold",
              }}
            >
              <ListItemButton>
                <NavLink
                  onClick={() => onSideNavLinkClick('KeySkills')}
                  to={isFormValid ? "/detailsfillingpage/keyskills" : '#'}
                  style={getNavItemStyle('KeySkills')}
                >
                  Key Skills
                </NavLink>
              </ListItemButton>
            </List>
          </Stack>
        </Box>

        {/* Render component based on the current route */}
        <Routes>
        <Route exact path="/personalinfo" element={<PersonalInfo isFormValid={isFormValid} />} />
          <Route exact path="/workex" element={<WorkEx isFormValid={isFormValid} />} />
          <Route exact path="/education" element={<Education isFormValid={isFormValid} />} />
          <Route exact path="/keyskills" element={<KeySkills isFormValid={isFormValid} />} />
        </Routes>
      </Container>

      {/* Bottom navigation for navigating between form sections */}
      <BottomNavigation 
        prevPagePath='/detailsfillingpage/workex' 
        nextPagePath='/detailsfillingpage/keyskills' 
        handleBack={handleBack} // Pass handleBack function
        handleNext={handleNext} // Pass handleNext function
        selectedNavItem={selectedNavItem} 
        isFormValid={isFormValid} 
      />
    </div>
  );
}

export default DetailsFillingPage;
