import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { styled } from '@mui/system';
import cover from "../Data/images/tempbg3.png";

// Styled components for custom styling using Material-UI's styled API
const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
}));

const LeftSide = styled(Box)(({ theme }) => ({
  // Background image for left side
  backgroundImage: `url(${cover})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  flex: '1',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flex: '1',
  },
}));

// Define styled components for the left and right sides of the container
const RightSide = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  flex: '2',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flex: '1',
  },
}));

// Define a styled component for the circle avatar using MUI's styled function
const CircleAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  marginRight: theme.spacing(4),
  borderRadius: '50%',
  border: '2px solid #ffffff',
  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    marginRight: theme.spacing(2),
  },
}));
// Define a styled component for custom typography using MUI's styled function
const CustomTypography = styled(Typography)({
  color: '#000001',
  fontWeight: 'normal',
  fontFamily: 'Oswald',
  fontStyle: 'Bold',
  fontSize: '15px',
});

// Define the main functional component named Template3
function Template3() {
  // Using useSelector hook from react-redux to access the store state
  const dataStore = useSelector(state => state.dataStore);

  return (
    <StyledBox>
      {/* Left side of the template */}
      <LeftSide>
        <Box>
          {/* Displaying user's avatar */}
          <CircleAvatar src={dataStore.imageFile} alt="profile-pic" />
        </Box>
        <Box mt={2}>
          {/* Displaying user's name and current job title */}
          <CustomTypography variant="h3" sx={{ color:'#ffffff', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
            {`${dataStore.personalInfo.firstName} ${dataStore.personalInfo.lastName}`}
          </CustomTypography>
          <CustomTypography mt={1} variant="h5" sx={{ color:'#ffffff', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '20px' }}>
            {dataStore.workEx[dataStore.workEx.length - 1].title}
          </CustomTypography>
        </Box>
        <Box mt={2}>
          {/* Displaying user's objective */}
          <CustomTypography variant="body1" align="justify" sx={{ color: '#000001', fontFamily: 'Droid Serif', fontWeight: 'normal',  fontStyle: 'italic' }}>
            {dataStore.personalInfo.Objective}
          </CustomTypography>
        </Box>
        <Box mt={2}>
          {/* Key Skills section */}
          <CustomTypography variant="h4" sx={{ color:'#ffffff', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
            Key Skills
          </CustomTypography>
          {/* Mapping through user's skills */}
          {dataStore.skills.map((skill) => (
            <CustomTypography key={skill.id} sx={{ color: '#000001', fontFamily: 'Lato', fontWeight: 'normal', fontStyle: 'regular' }}>
              <ul><li>{skill.skillName}</li></ul>
            </CustomTypography>
          ))}
        </Box>
        <Box style={{ fontSize: '18px' }}>
          {/* Contact section */}
          <Box mt={2}>
            <CustomTypography variant='h4' sx={{ color:'#ffffff', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
              Contact
            </CustomTypography>
          </Box>
          {/* Displaying user's contact information */}
          <CustomTypography>{dataStore.personalInfo.Email}</CustomTypography>
          <CustomTypography>{dataStore.personalInfo.Mobile}</CustomTypography>
          <CustomTypography>{`${dataStore.personalInfo.Address},  ${dataStore.personalInfo.City}, ${dataStore.personalInfo.State}, ${dataStore.personalInfo.Pin}`}</CustomTypography>
        </Box>
      </LeftSide>
      {/* Right side of the template */}
      <RightSide>
        <CustomTypography variant="h4" sx={{ color:'#000001', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
          Work Experience
        </CustomTypography>
        <Box mt={2}>
          {/* Mapping through user's work experience */}
          {dataStore.workEx.map((item) => (
            <div key={item.id}>
              <CustomTypography variant="h6">
                {item.title}
              </CustomTypography>
              <CustomTypography>
                {`Worked in ${item.orgName} from ${item.startYear} to ${item.endYear}.`}
              </CustomTypography>
            </div>
          ))}
        </Box>
       
        <Box mt={2}>
          <CustomTypography variant="h4" sx={{ color:'#000001', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
            Education
          </CustomTypography>
          
          {dataStore.education.map((item) => (
            <Box key={item.id} mt={1}>
              <CustomTypography variant="h6">
                {item.Degree}
              </CustomTypography>
              <CustomTypography mt={2} variant="body1" align="justify" sx={{ color: '#000001', fontFamily: 'Droid Serif', fontWeight: 'normal', fontStyle: 'italic' }}>
                {`I have pursued my ${item.Type} in ${item.Degree} from ${item.University}`}
              </CustomTypography>
              <CustomTypography>{`Duration: ${item.Start} - ${item.End}`}</CustomTypography>
            </Box>
          ))}
        </Box>
     
       
      </RightSide>
    </StyledBox>
  );
}

export default Template3;
