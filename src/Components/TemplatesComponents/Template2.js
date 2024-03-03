import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';

// Styled components for custom styling
const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'white',
  width: '794px', 
  height: '1123px', 
}));

const LeftSide = styled(Box)(({ theme }) => ({
  backgroundColor: '#F4F4F4', 
  flex: '2', // Takes up 2/5 of the available space
  padding: theme.spacing(4), 
}));

const RightSide = styled(Box)(({ theme }) => ({
  flex: '3', // Takes up 3/5 of the available space
  padding: theme.spacing(4), 
}));

// Styled Avatar for circular shape
const CircleAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(30), 
  height: theme.spacing(30), 
  marginRight: theme.spacing(4), 
  borderRadius: '50%', 
  border:'15px solid #ffffff' 
}));

function Template2() {
  const dataStore = useSelector(state => state.dataStore); // Accessing data from Redux store

  return (
    <StyledBox>
      {/* Left side */}
      <LeftSide>
        <Box>
          {/* Circular Avatar */}
          <CircleAvatar src={dataStore.imageFile} alt="profile-pic" />
        </Box>

        {/* Contact section */}
        <Box mt={4} bgcolor='#444440'>
          <Typography variant='h4' sx={{ color:'#ffffff', fontFamily: 'Garet', fontWeight: 'normal', fontSize: '37', fontStyle: 'regular', textAlign:'center' }}>
            Contact
          </Typography>
        </Box>
        <Box mt={2}>
          {/* Email, Phone, and Location */}
          <Typography><EmailIcon style={{ marginBlock: '8px', padding:'2px' }}  fontSize="medium" />{dataStore.personalInfo.Email}</Typography>
          <Typography><PhoneIcon style={{ marginBlock: '8px', padding:'2px' }} fontSize="medium" />{dataStore.personalInfo.Mobile}</Typography>
          <Typography><LocationOnIcon style={{ marginBlock: '8px', padding:'2px' }} fontSize="medium" />{`${dataStore.personalInfo.Address},  ${dataStore.personalInfo.City}, ${dataStore.personalInfo.State}, ${dataStore.personalInfo.Pin}`}</Typography>
        </Box>
        
        {/* Education section */}
        <Box mt={4} bgcolor='#444440'>
          <Typography variant="h4" sx={{ color:'#ffffff', fontFamily: 'Garet', fontWeight: 'normal', fontSize: '37', fontStyle: 'regular', textAlign:'center' }}>
            Education
          </Typography> 
        </Box>

        {/* Mapping through education items */}
        {dataStore.education.map((item) => (
          <Box key={item.id} mt={2}>
            <Typography variant="h6" sx={{ color:'#000001', fontFamily: 'Lato', fontWeight: 'normal', fontSize: '10', fontStyle: 'regular' }}>
              {item.Degree}
            </Typography>
            <Typography mt={2} variant="body1" align="justify" sx={{ color:'#000001', fontFamily: 'Lato', fontWeight: 'normal', fontSize: '10', fontStyle: 'regular' }}>
              {`I have pursued my ${item.Type} in ${item.Degree} from ${item.University}`}
            </Typography>
            <Typography>{`Duration: ${item.Start} - ${item.End}`}</Typography>
          </Box>
        ))}
       
        {/* Key Skills section */}
        <Box mt={2} bgcolor='#444440'>
          <Typography variant="h4" sx={{ color:'#ffffff', fontFamily: 'Garet', fontWeight: 'normal', fontSize: '37px', fontStyle: 'regular', textAlign:'Center' }}>
            Key Skills
          </Typography>
        </Box>
        <Box mt={2}>
          {/* Mapping through key skills */}
          {dataStore.skills.map((skill) => (
            <Typography key={skill.id} sx={{ color:'#000001', fontFamily: 'Lato', fontWeight: 'normal', fontSize: '10', fontStyle: 'regular' }}>
              <ul><li>{skill.skillName}</li></ul>
            </Typography>
          ))}
        </Box>
      </LeftSide>

      {/* Right side */}
      <RightSide>
        <Box>
          {/* Name and latest job title */}
          <Typography variant="h3" sx={{ color:'#000001', fontFamily: 'Garet', fontWeight: 'normal', fontSize: '37', fontStyle: 'regular' }}>
            {`${dataStore.personalInfo.firstName} ${dataStore.personalInfo.lastName}`}
          </Typography>
          <Typography variant="h5" sx={{ color:'#000001', fontFamily: 'Lato', fontWeight: 'normal', fontSize: '10', fontStyle: 'regular' }}>
            {dataStore.workEx[dataStore.workEx.length - 1].title}
          </Typography>
        </Box>
        <Box mt={4}>
          {/* Objective */}
          <Typography variant="body1" align="justify" sx={{ color:'#000001', fontFamily: 'Oswald', fontWeight: 'normal', fontSize: '10', fontStyle: 'regular' }}>
            {dataStore.personalInfo.Objective}
          </Typography>
        </Box>
        
        <Box bgcolor='#444440'>
          {/* Work Experience section */}
          <Typography variant="h4" mt={2} sx={{ color:'#ffffff', fontFamily: 'Garet', fontWeight: 'normal', fontSize: '37', fontStyle: 'regular', textAlign:'center'}}>
            Work Experience
          </Typography>
        </Box>
        <Box mt={2}>
          {/* Mapping through work experience items */}
          {dataStore.workEx.map((item) => (
            <div key={item.id}>
              <Typography variant="h6" sx={{ color:'#000001', fontFamily: 'Lato', fontWeight: 'normal', fontSize: '10', fontStyle: 'regular' }}>
                {item.title}</Typography>
              <Typography sx={{ color:'#000001', fontFamily: 'Lato', fontWeight: 'normal', fontSize: '10', fontStyle: 'regular' }}>
                {`Worked in ${item.orgName} from ${item.startYear} to ${item.endYear}.`}
              </Typography>
            </div>
          ))}
        </Box>
        <Divider />
        <Divider />
      </RightSide>
    </StyledBox>
  );
}

export default Template2;
