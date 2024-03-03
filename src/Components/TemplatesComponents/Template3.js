import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';
import  cover from "../Data/images/tempbg3.png"; // Importing background image

// Styled components for custom styling
const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '794px', 
  height: '1123px', 
}));

const LeftSide = styled(Box)(({ theme }) => ({
  backgroundImage:`url(${cover})`, 
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat', 
  backgroundPosition: 'center', 
  flex: '2', // Takes up 2/5 of the available space
  padding: theme.spacing(4), 
}));

const RightSide = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff', 
  flex: '3', 
  padding: theme.spacing(4), 
}));

const CircleAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20), 
  height: theme.spacing(20), 
  marginRight: theme.spacing(4), 
  borderRadius: '50%', 
  border:'5px solid #ffffff' 
}));

// Define custom styled component using styled for Typography
const CustomTypography = styled(Typography)({
  color: '#000001', 
  fontWeight: 'normal', 
  fontFamily:'Oswald', 
  fontStyle: 'Bold', 
  fontSize: '15' 
});

function Template3() {
  const dataStore = useSelector(state => state.dataStore); // Accessing data from Redux store

  return (
    <StyledBox>
      {/* Left side */}
      <LeftSide>
        <Box>
          {/* Circular Avatar */}
          <CircleAvatar src={dataStore.imageFile} alt="profile-pic" />
        </Box>
        <Box mt={4}>
          {/* First name and last name */}
          <CustomTypography variant="h3" sx={{color: '#ffffff'}}>
            {`${dataStore.personalInfo.firstName} ${dataStore.personalInfo.lastName}`}
          </CustomTypography>
          {/* Latest job title */}
          <CustomTypography variant="h5" sx={{color: '#ffffff'}} >
            {dataStore.workEx[dataStore.workEx.length - 1].title}
          </CustomTypography>
        </Box>
        <Box mt={4}>
          {/* Objective */}
          <CustomTypography variant="body1" align="justify" sx={{ color:'#000001', fontFamily: 'Droid Serif', fontWeight: 'normal', fontSize: '37', fontStyle: 'italic' }} >
            {dataStore.personalInfo.Objective}
          </CustomTypography>
        </Box>
        <Box mt={2}>
          {/* Key Skills section */}
          <CustomTypography variant="h4" sx={{ color:'#ffffff'}}>
            Key Skills
          </CustomTypography>
          {/* Mapping through key skills */}
          {dataStore.skills.map((skill) => (
            <CustomTypography key={skill.id} sx={{ color:'#000001', fontFamily: 'Lato', fontWeight: 'normal', fontSize: '10', fontStyle: 'regular' }}>
              <ul><li>{skill.skillName}</li></ul>
            </CustomTypography>
          ))}
        </Box>
        <Box style={{ fontSize: '18px' }}>
          <Box mt={4}>
            {/* Contact section */}
            <CustomTypography variant='h4' sx={{color: '#ffffff'}} >
              Contact
            </CustomTypography>
          </Box>
          {/* Email, Mobile, Address */}
          <CustomTypography>{dataStore.personalInfo.Email}</CustomTypography>
          <CustomTypography>{dataStore.personalInfo.Mobile}</CustomTypography>
          <CustomTypography>{`${dataStore.personalInfo.Address},  ${dataStore.personalInfo.City}, ${dataStore.personalInfo.State}, ${dataStore.personalInfo.Pin}`}</CustomTypography>
        </Box>
      </LeftSide>
      {/* Right side */}
      <RightSide>
        <Box>
          {/* Work Experience section */}
          <CustomTypography variant="h4" >
            Work Experience
          </CustomTypography>
          <Box mt={2}>
            {/* Mapping through work experience items */}
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
        <Divider />
        <Box mt={25}>
          <CustomTypography variant="h4" >
            Education
          </CustomTypography>
          {/* Mapping through education items */}
          {dataStore.education.map((item) => (
            <Box key={item.id} mt={2} >
              <CustomTypography variant="h6" >
                {item.Degree}
              </CustomTypography>
              <CustomTypography mt={2} variant="body1" align="justify" sx={{ color:'#000001', fontFamily: 'Droid Serif', fontWeight: 'normal', fontSize: '10', fontStyle: 'italic' }} >
                {`I have pursued my ${item.Type} in ${item.Degree} from ${item.University}`}
              </CustomTypography>
              <CustomTypography>{`Duration: ${item.Start} - ${item.End}`}</CustomTypography>
            </Box>
          ))}
        </Box>
        <Divider />
      </RightSide>
    </StyledBox>
  );
}

export default Template3;
