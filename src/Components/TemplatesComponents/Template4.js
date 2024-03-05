import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';

// Styled components for custom styling using Material-UI's styled API
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
}));

const LeftSide = styled(Box)(({ theme }) => ({
  backgroundColor: '#B39E9F',
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
  padding: theme.spacing(0),
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
  fontFamily: 'Lato Heavy',
  fontStyle: 'Bold',
  fontSize: '15px',
});

// Define the main functional component named Template4
function Template4() {
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
        <Box mt={4}>
          {/* Displaying user's objective */}
          <CustomTypography variant="body1" align="justify" sx={{ color:'#ffffff', fontFamily: 'Lora', fontWeight: 'normal',  fontStyle: 'regular' }} >
            {dataStore.personalInfo.Objective}
          </CustomTypography>
        </Box>
        <Box >
          <Box mt={2}>
            {/* Contact section heading */}
            <CustomTypography variant='h4' sx={{ color:'#ffffff', fontFamily: 'LatoHeavy', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
              Contact
            </CustomTypography>
          </Box>
          {/* Displaying user's contact information */}
          <CustomTypography sx={{ color:'#ffffff' }}><EmailIcon style={{ marginBlock: '8px', padding:'2px' }}  fontSize="medium" />{dataStore.personalInfo.Email}</CustomTypography>
          <CustomTypography sx={{ color:'#ffffff' }}><PhoneIcon style={{ marginBlock: '8px', padding:'2px' }} fontSize="medium" />{dataStore.personalInfo.Mobile}</CustomTypography>
          <CustomTypography sx={{ color:'#ffffff' }}><LocationOnIcon style={{ marginBlock: '8px', padding:'2px' }} fontSize="medium" />{`${dataStore.personalInfo.Address},  ${dataStore.personalInfo.City}, ${dataStore.personalInfo.State}, ${dataStore.personalInfo.Pin}`}</CustomTypography>
        </Box>
      </LeftSide>
      {/* Right side of the template */}
      <RightSide>
        {/* Box for positioning elements at the bottom */}
        <Box display="flex" flexDirection="column" justifyContent="flex-end"  sx={{ backgroundColor: '#DDD0D1', height: '225px' }}>
          {/* Displaying user's first name */}
          <CustomTypography variant="h3" pl={2}sx={{ color:'#000001', fontFamily: 'LatoHeavy', fontWeight:'Bold', fontStyle:'Bold', fontSize: '30px' }}>
            {`${dataStore.personalInfo.firstName}`}
          </CustomTypography>
          {/* Displaying user's last name */}
          <CustomTypography variant="h3" pl={2} sx={{ color:'#000001', fontFamily: 'LatoHeavy', fontWeight:'Bold', fontStyle:'Bold', fontSize: '30px' }}>
            {`${dataStore.personalInfo.lastName}`}
          </CustomTypography>
          {/* Displaying user's current job title */}
          <CustomTypography variant="h5" p={2} sx={{ color: '#000001', fontFamily: 'LatoHeavy',fontWeight:'Bold', fontStyle: 'italic', fontSize: '20px' }} >
            {dataStore.workEx[dataStore.workEx.length - 1].title}
          </CustomTypography>
        </Box>
        <Box mt={2} sx ={{ backgroundColor: '#ffffff' }}>
          {/* Education section */}
          <Box>
            <CustomTypography variant="h4" sx={{ color:'#000001', fontFamily: 'LatoHeavy', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
              {/* Arrow icon for indicating section */}
              <ArrowRightAlt style={{ marginBlock: '8px', padding:'2px', color:'#B39E9F' }} fontSize="Large" />Education
            </CustomTypography>
            {/* Mapping through user's education */}
            {dataStore.education.map((item) => (
              <Box key={item.id} ml={4}>
                {/* Displaying user's education details */}
                <CustomTypography variant="h6">
                  {item.Degree}
                </CustomTypography>
                <CustomTypography mt={1} mr={2} variant="body1" align="justify" sx={{ color:'#000001', fontFamily: 'Droid Serif', fontWeight: 'normal', fontStyle: 'italic' }}>
                  {`I have pursued my ${item.Type} in ${item.Degree} from ${item.University}`}
                </CustomTypography>
                <CustomTypography>{`Duration: ${item.Start} - ${item.End}`}</CustomTypography>
              </Box>
            ))}
          </Box>
          <Box mt={2}>
            {/* Key Skills section */}
            <CustomTypography variant="h4" sx={{ color:'#000001', fontFamily: 'LatoHeavy', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
              {/* Arrow icon for indicating section */}
              <ArrowRightAlt style={{ marginBlock: '8px', padding:'2px', color:'#B39E9F' }} fontSize="Large" />Key Skills
            </CustomTypography>
            {/* Mapping through user's skills */}
            {dataStore.skills.map((skill) => (
              <CustomTypography key={skill.id} sx={{ color:'#000001', fontFamily: 'Lato', fontWeight: 'normal', fontStyle: 'regular' }}>
                <ul><li>{skill.skillName}</li></ul>
              </CustomTypography>
            ))}
          </Box>
          <Box mt={2}>
            {/* Work Experience section */}
            <CustomTypography variant="h4" sx={{ color:'#000001', fontFamily: 'LatoHeavy', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
              {/* Arrow icon for indicating section */}
              <ArrowRightAlt style={{ marginBlock: '8px', padding:'2px', color:'#B39E9F' }} fontSize="Large" />Work Experience
            </CustomTypography>
            <Box mt={2} ml={4}>
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
          </Box>
        </Box>
        
      </RightSide>
    </StyledBox>
  );
}

export default Template4;
