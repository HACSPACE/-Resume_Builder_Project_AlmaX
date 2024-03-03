import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';

// Styled components for custom styling
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff', 
  display: 'flex', 
  flexDirection: 'row', 
  width: '794px', 
  height: '1123px', 
  padding: '20px', 
}));

const LeftSide = styled(Box)(({ theme }) => ({
  backgroundColor: '#B39E9F', 
  flex: '2', // Takes up 2/5 of the available space
  padding: theme.spacing(4), 
}));

const RightSide = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff', 
  flex: '3', // Takes up 3/5 of the available space
  padding: theme.spacing(0), 
}));

const CircleAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20), 
  height: theme.spacing(20), 
  marginRight: theme.spacing(4), 
  borderRadius: '50%', 
  border: '5px solid #ffffff', 
}));

// Define custom styled component using styled for Typography
const CustomTypography = styled(Typography)({
  color: '#000001', 
  fontWeight: 'normal', 
  fontFamily: 'Lato Heavy',
  fontStyle: 'Bold', 
  fontSize: '15', 
});

function Template4() {
  const dataStore = useSelector(state => state.dataStore); // Accessing data from Redux store

  return (
    <StyledBox>
      {/* Left side */}
      <LeftSide >
        <Box>
          {/* Circular Avatar */}
          <CircleAvatar src={dataStore.imageFile} alt="profile-pic" />
        </Box>
        <Box mt={4}>
          {/* Objective */}
          <CustomTypography variant="body1" align="justify" sx={{ color:'#ffffff', fontFamily: 'Lora', fontWeight: 'normal', fontSize: '37', fontStyle: 'regular' }} >
            {dataStore.personalInfo.Objective}
          </CustomTypography>
        </Box>
        <Box style={{ fontSize: '18px' }}>
          <Box mt={4}>
            {/* Contact section */}
            <CustomTypography variant='h4' sx={{color: '#ffffff'}} >
              Contact
            </CustomTypography>
          </Box>
          {/* Email, Mobile, Address */}
          <CustomTypography sx={{color:'#ffffff'}}>
            <EmailIcon style={{ marginBlock: '8px', padding:'2px' }}  fontSize="medium" />
            {dataStore.personalInfo.Email}
          </CustomTypography>
          <CustomTypography sx={{color:'#ffffff'}}>
            <PhoneIcon style={{ marginBlock: '8px', padding:'2px' }} fontSize="medium" />
            {dataStore.personalInfo.Mobile}
          </CustomTypography>
          <CustomTypography sx={{color:'#ffffff'}}>
            <LocationOnIcon style={{ marginBlock: '8px', padding:'2px' }} fontSize="medium" />
            {`${dataStore.personalInfo.Address},  ${dataStore.personalInfo.City}, ${dataStore.personalInfo.State}, ${dataStore.personalInfo.Pin}`}
          </CustomTypography>
        </Box>
      </LeftSide>
      {/* Right side */}
      <RightSide>
        <Box display="flex" flexDirection="column" justifyContent="flex-end"  sx={{backgroundColor: '#DDD0D1',height:'225px'}}>
          {/* First name */}
          <CustomTypography variant="h3" pl={2} >
            {`${dataStore.personalInfo.firstName}`}
          </CustomTypography>
          {/* Last name */}
          <CustomTypography variant="h3" pl={2}>
            { `${dataStore.personalInfo.lastName}`}
          </CustomTypography>
          {/* Latest job title */}
          <CustomTypography variant="h5" p={2} sx={{color: '#000001', fontFamily: 'Lora', fontStyle:'italic'}} >
            {dataStore.workEx[dataStore.workEx.length - 1].title}
          </CustomTypography>
        </Box>
        <Box  sx ={{backgroundColor: '#ffffff'}}>
          {/* Education section */}
          <Box  >
            <CustomTypography variant="h4" >
              <ArrowRightAlt style={{ marginBlock: '8px', padding:'2px' , color:'#B39E9F' }}fontSize="Large" />
              Education
            </CustomTypography>
            {/* Education details */}
            {dataStore.education.map((item) => (
              <Box key={item.id} ml={4} >
                <CustomTypography variant="h6" >
                  {item.Degree}
                </CustomTypography>
                <CustomTypography mt={1}  variant="body1" align="justify" sx={{ color:'#000001', fontFamily: 'Droid Serif', fontWeight: 'normal', fontSize: '10', fontStyle: 'italic' }} >
                  {`I have pursued my ${item.Type} in ${item.Degree} from ${item.University}`}
                </CustomTypography>
                <CustomTypography>{`Duration: ${item.Start} - ${item.End}`}</CustomTypography>
              </Box>
            ))}
          </Box>
          <Box mt={5}>
            {/* Key Skills section */}
            <CustomTypography variant="h4" sx={{ color:'#000001'}}>
              <ArrowRightAlt style={{ marginBlock: '8px', padding:'2px' , color:'#B39E9F' }}fontSize="Large" />
              Key Skills
            </CustomTypography>
            {/* Key skills */}
            {dataStore.skills.map((skill) => (
              <CustomTypography key={skill.id} sx={{ color:'#000001', fontFamily: 'Lato', fontWeight: 'normal', fontSize: '10', fontStyle: 'regular' }}>
                <ul><li>{skill.skillName}</li></ul> 
              </CustomTypography>
            ))}
          </Box>
          <Box mt={5}>
            {/* Work Experience section */}
            <CustomTypography variant="h4" >
              <ArrowRightAlt style={{ marginBlock: '8px', padding:'2px' , color:'#B39E9F' }}fontSize="Large" />
              Work Experience
            </CustomTypography>
            <Box mt={2} ml={4}>
              {/* Work experience details */}
              {dataStore.workEx.map((item) => (
                <div key={item.id}>
                  <CustomTypography variant="h6" >
                    {item.title}
                  </CustomTypography>
                  <CustomTypography >
                    {`Worked in ${item.orgName} from ${item.startYear} to ${item.endYear}.`}
                  </CustomTypography>
                </div>
              ))}
            </Box>
          </Box>
        </Box>
        <Divider />
        <Divider />
      </RightSide>
    </StyledBox>
  );
}

export default Template4;
