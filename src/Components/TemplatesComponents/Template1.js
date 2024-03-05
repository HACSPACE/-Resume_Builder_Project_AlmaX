import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

// Define a styled component for the main container using MUI's styled function
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
}));

// Define styled components for the left and right sides of the container
const LeftSide = styled(Box)(({ theme }) => ({
  flex: '2',
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flex: '1',
  },
}));

const RightSide = styled(Box)(({ theme }) => ({
  backgroundColor: '#F8E7DD',
  flex: '3',
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flex: '2',
  },
}));

// Define a styled component for the circle avatar using MUI's styled function
const CircleAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  marginRight: theme.spacing(4),
  borderRadius: '50%',

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
  fontFamily: 'Lato',
  fontStyle: 'Regular',
  fontSize: '14px',
});

// Define the main functional component named Template1 
function Template1() {

  // Access Redux state using the useSelector hook
  const dataStore = useSelector(state => state.dataStore);

  return (
    <StyledBox>
      {/* Left side of the container */}
      <LeftSide>
         {/* Display profile information */}
        <Box>
          <CircleAvatar src={dataStore.imageFile} alt="profile-pic" />
        </Box>
        <Box mt={2}>
          <CustomTypography variant="h3" sx={{ color: '#000001', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
            {`${dataStore.personalInfo.firstName} ${dataStore.personalInfo.lastName}`}
          </CustomTypography>
          <CustomTypography variant="h5" sx={{ color: '#000001' }}>
            {dataStore.workEx[dataStore.workEx.length - 1].title}
          </CustomTypography>
        </Box>
        <Box mt={2}>
          <CustomTypography variant="body1" align="justify" sx={{ color: '#000001', fontFamily: 'Droid Serif', fontWeight: 'normal',  fontStyle: 'Regular' }}>
            {dataStore.personalInfo.Objective}
          </CustomTypography>
        </Box>
        <Box style={{ fontSize: '18px' }}>
          <Box mt={2}>
            <CustomTypography variant='h4' sx={{ color: '#000001', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
              Contact
            </CustomTypography>
          </Box>
          <CustomTypography>{dataStore.personalInfo.Email}</CustomTypography>
          <CustomTypography>{dataStore.personalInfo.Mobile}</CustomTypography>
          <CustomTypography>{`${dataStore.personalInfo.Address},  ${dataStore.personalInfo.City}, ${dataStore.personalInfo.State}, ${dataStore.personalInfo.Pin}`}</CustomTypography>
        </Box>
      </LeftSide>

      {/* Right side of the container */}
      <RightSide>
        {/* Display work experience, education, and key skills */}
        <CustomTypography variant="h4" sx={{ color: '#000001', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
          Work Experience
        </CustomTypography>
        <Box mt={2}>
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
          <CustomTypography variant="h4" sx={{ color: '#000001', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
            Education
          </CustomTypography>
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
          <Box mt={2}>
            <CustomTypography variant="h4" sx={{ color: '#000001', fontFamily: 'Oswald', fontWeight:'Bold', fontStyle:'Bold', fontSize: '25px' }}>
              Key Skills
            </CustomTypography>
            <Box mt={2}>

            {dataStore.skills.map((skill) => (
              <CustomTypography key={skill.id} >
                <ul><li>{skill.skillName}</li></ul>
              </CustomTypography>
            ))}
            </Box>
          </Box>
        </Box>
        
      </RightSide>
    </StyledBox>
  );
}

export default Template1;
