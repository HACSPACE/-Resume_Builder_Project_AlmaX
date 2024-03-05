import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Styled components for custom styling using Material-UI's styled API
const StyledBox = styled(Box)(({ theme }) => ({
  
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
}));

// Define styled components for the left and right sides of the container
const LeftSide = styled(Box)(({ theme }) => ({
  backgroundColor: '#F4F4F4',
  flex: '1',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flex: '1',
  },
}));

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
  border: '10px solid #ffffff',
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
  fontFamily: 'Lato Heavy',
  fontStyle: 'Bold',
  fontSize: '15px',
});

// Define the main functional component named Template2
function Template2() {
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
       
        {/* Contact section */}
        <Box mt={2} bgcolor='#444440' display="flex" justifyContent="center">
          {/* Custom styled typography for section heading */}
          <CustomTypography variant='h4' sx={{ color:'#ffffff', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
            Contact
          </CustomTypography>
        </Box>
        <Box style={{ fontSize: '18px' }}>
          {/* Displaying user's contact information */}
          <CustomTypography >
            <EmailIcon style={{ marginBlock: '8px', padding:'2px' }} fontSize="medium" />
            {dataStore.personalInfo.Email}
          </CustomTypography>
          <CustomTypography >
            <PhoneIcon style={{ marginBlock: '8px', padding:'2px' }} fontSize="medium" />
            {dataStore.personalInfo.Mobile}
          </CustomTypography>
          <CustomTypography >
            <LocationOnIcon style={{ marginBlock: '8px', padding:'2px' }} fontSize="medium" />
            {`${dataStore.personalInfo.Address},  ${dataStore.personalInfo.City}, ${dataStore.personalInfo.State}, ${dataStore.personalInfo.Pin}`}
          </CustomTypography>
        </Box>
        
        {/* Education section */}
        <Box mt={4} bgcolor='#444440' display="flex" justifyContent="center">
          <CustomTypography variant="h4" sx={{ color:'#ffffff', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
            Education
          </CustomTypography>
        </Box>
        {/* Mapping through user's education data */}
        {dataStore.education.map((item) => (
          <Box key={item.id} mt={2}>
            <CustomTypography variant="h6">
              {item.Degree}
            </CustomTypography>
            <CustomTypography mt={2} variant="body1" align="justify" sx={{ color: '#000001', fontFamily: 'Droid Serif', fontWeight: 'normal', fontStyle: 'Regular' }}>
              {`I have pursued my ${item.Type} in ${item.Degree} from ${item.University}`}
            </CustomTypography>
            <CustomTypography>{`Duration: ${item.Start} - ${item.End}`}</CustomTypography>
          </Box>
        ))}
        
        {/* Key Skills section */}
        <Box mt={2} bgcolor='#444440' display="flex" justifyContent="center">
          <CustomTypography variant="h4" sx={{ color:'#ffffff', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
            Key Skills 
          </CustomTypography>
        </Box>
        <Box mt={2}>
          {/* Mapping through user's skills */}
          {dataStore.skills.map((skill) => (
            <CustomTypography key={skill.id} >
              <ul><li>{skill.skillName}</li></ul>
            </CustomTypography>
          ))}
        </Box>
      </LeftSide>
      
      {/* Right side of the template */}
      <RightSide>
        <Box mt={4}>
          {/* Displaying user's name and current job title */}
          <CustomTypography variant="h3" sx={{ color:'#000001', fontFamily: 'Barlow', fontWeight:'Bold', fontStyle:'Bold', fontSize: '30px' }}>
            {`${dataStore.personalInfo.firstName} ${dataStore.personalInfo.lastName}`}
          </CustomTypography>
          <CustomTypography variant="h5" sx={{ color: '#000001' }}>
            {dataStore.workEx[dataStore.workEx.length - 1].title}
          </CustomTypography>
        </Box>
        <Box mt={4}>
          {/* Displaying user's objective */}
          <CustomTypography variant="body1" align="justify" sx={{ color: '#000001', fontFamily: 'Droid Serif', fontWeight: 'normal',  fontStyle: 'Regular' }}>
            {dataStore.personalInfo.Objective}
          </CustomTypography>
        </Box>
        <Box mt={2} bgcolor='#444440' display="flex" justifyContent="left">
          {/* Work Experience section */}
          <CustomTypography variant="h4" sx={{ color:'#ffffff', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
            Work Experience
          </CustomTypography>
        </Box>
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
      </RightSide>
    </StyledBox>
  );
}

export default Template2;
