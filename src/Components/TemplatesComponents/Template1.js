import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';

// Styling components using MUI's styled function
const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '794px', 
  height: '1123px',
}));

const LeftSide = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  flex: '2', // Using flex to control layout, occupies 2 parts out of 5
  padding: theme.spacing(4), 
}));

const RightSide = styled(Box)(({ theme }) => ({
  backgroundColor: '#F8E7DD',
  flex: '3', // Using flex to control layout, occupies 3 parts out of 5
  padding: theme.spacing(4), 
}));

// Custom styled Avatar for circular shape
const CircleAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20), 
  height: theme.spacing(20), 
  marginRight: theme.spacing(4), 
  borderRadius: '50%', 
}));

function Template1() {
  // Accessing data from Redux store
  const dataStore = useSelector(state => state.dataStore);

  return (
    <StyledBox>
      {/* Left side of the layout */}
      <LeftSide>
        <Box>
          {/* Circular Avatar */}
          <CircleAvatar src={dataStore.imageFile} alt="profile-pic" />
        </Box>
        <Box mt={4}>
          {/* Personal information */}
          <Typography variant="h3" sx={{ color:'#000001', fontFamily: 'Oswald', fontWeight: 'normal', fontSize: '37', fontStyle: 'regular' }}>
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
        <Box style={{ fontSize: '18px' }}>
          <Box mt={4}>
            {/* Contact information */}
            <Typography variant='h4' sx={{ color:'#000001', fontFamily: 'Oswald', fontWeight: 'normal', fontSize: '37', fontStyle: 'regular' }}>
              Contact
            </Typography>
          </Box>
          <Typography>{dataStore.personalInfo.Email}</Typography>
          <Typography>{dataStore.personalInfo.Mobile}</Typography>
          <Typography>{`${dataStore.personalInfo.Address},  ${dataStore.personalInfo.City}, ${dataStore.personalInfo.State}, ${dataStore.personalInfo.Pin}`}</Typography>
        </Box>
      </LeftSide>

      {/* Right side of the layout */}
      <RightSide>
        <Typography variant="h4" sx={{ color:'#000001', fontFamily: 'Oswald', fontWeight: 'normal', fontSize: '37', fontStyle: 'regular' }}>
          Work Experience
        </Typography>
        <Box mt={2}>
          {/* Displaying work experience */}
          {dataStore.workEx.map((item) => (
            <div key={item.id}>
              <Typography variant="h6" sx={{ color:'#000001', fontFamily: 'Lato', fontWeight: 'normal', fontSize: '10', fontStyle: 'regular' }}>
                {item.title}
              </Typography>
              <Typography sx={{ color:'#000001', fontFamily: 'Lato', fontWeight: 'normal', fontSize: '10', fontStyle: 'regular' }}>
                {`Worked in ${item.orgName} from ${item.startYear} to ${item.endYear}.`}
              </Typography>
            </div>
          ))}
        </Box>

        <Divider />
        <Box mt={2}>
          <Typography variant="h4" sx={{ color:'#000001', fontFamily: 'Oswald', fontWeight: 'normal', fontSize: '37', fontStyle: 'regular' }}>
            Education
          </Typography>
          {/* Displaying education details */}
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
        </Box>

        <Divider />
        <Box mt={2}>
          <Typography variant="h4" sx={{ color:'#000001', fontFamily: 'Oswald', fontWeight: 'normal', fontSize: '37px', fontStyle: 'regular' }}>
            Key Skills
          </Typography>
          {/* Displaying key skills */}
          {dataStore.skills.map((skill) => (
            <Typography key={skill.id} sx={{ color:'#000001', fontFamily: 'Lato', fontWeight: 'normal', fontSize: '10', fontStyle: 'regular' }}>
              <ul><li>{skill.skillName}</li></ul>
            </Typography>
          ))}
        </Box>
      </RightSide>
    </StyledBox>
  );
}

export default Template1;
