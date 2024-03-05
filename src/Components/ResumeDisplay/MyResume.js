import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, TextField, Button, Paper, Typography } from '@mui/material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Template1 from '../TemplatesComponents/Template1';
import Template2 from '../TemplatesComponents/Template2';
import Template3 from '../TemplatesComponents/Template3';
import Template4 from '../TemplatesComponents/Template4';
import SuccessMessage from './Modal';
import { updateSelectedNavItem } from '../../ReduxManager/dataStoreSlice';

function MyResume() {
  // Retrieve selected template from Redux state
  const selectedTemplate = useSelector(state => state.dataStore.selectedTemplate);
  // State variables for controlling modal visibility and file name
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState('resume');
  // Redux dispatcher
  const dispatch = useDispatch();

  // Function to download PDF
  const downloadComponentPDF = () => {
    // Get the container element to capture for PDF
    const input = document.getElementById('divToPrint');
    const inputWidth = input.offsetWidth;
    const inputHeight = input.offsetHeight;

    // Capture the container element as an image with higher scale
    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        // Convert captured image to data URL
        const imgData = canvas.toDataURL('image/png');
        // Create a new jsPDF instance with A4 page size
        const pdf = new jsPDF('p', 'px', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        // Calculate image size to fit within PDF page
        const ratio = Math.min(pdfWidth / inputWidth, pdfHeight / inputHeight);
        const width = inputWidth * ratio;
        const height = inputHeight * ratio;
        // Add captured image to PDF
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        // Save PDF with provided file name
        pdf.save(`${fileName}.pdf`);
      })
      .then(() => {
        // Show success modal and hide after 6 seconds
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 6000);
      });
  };

  // Function to handle navigation back
  const handleBack = () => {
    // Dispatch action to update selectedNavItem to 'KeySkills'
    dispatch(updateSelectedNavItem('KeySkills'));
  };

  return (
    <Grid container spacing={3} className="container">
      <Grid item xs={12} md={6}>
        {/* Resume Preview section */}
        <h2 className="text-left mb-4">Resume Preview</h2>
        <Paper id='divToPrint' elevation={3} style={{ width: '100%', height: '100%' }}>
          {/* Render selected template */}
          {selectedTemplate === ""
            ? <Typography variant="h3" sx={{ color:'#000001', fontFamily: 'Oswald', fontWeight: 'normal', fontSize: '37', fontStyle: 'regular' }}>
                Please select a template!</Typography>
            : selectedTemplate === "Template 1"
              ? <Template1 />
              : selectedTemplate === "Template 2"
                ? <Template2 />
                : selectedTemplate === "Template 3"
                  ? <Template3 />
                  : <Template4 />}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Controls section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft:'170px', marginTop:'60px'}}>
          {/* File name input */}
          <TextField
            id="fileNameInput"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            label="Create File Name"
            placeholder="Enter file name"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '16px' }}
          />
          
          <div>
            {/* Back button */}
            <Link to="/detailsfillingpage/keyskills" style={{ textDecoration: 'none', marginRight: '8px' }}>
              <Button variant="contained" color="primary" onClick={handleBack}>Back</Button>
            </Link>
            {/* Save button */}
            <Button variant="contained" color="success" onClick={downloadComponentPDF}>Save</Button>
          </div>
        </div>
      </Grid>
      {/* Modal section */}
      <Grid item xs={12}>
        <div className='mt-2 p-5 w-100' style={{ minWidth: "1200px", overflow: 'scroll' }}>
          <div><SuccessMessage showModal={showModal} setShowModal={setShowModal} /></div>
        </div>
      </Grid>
    </Grid>
  );
}

export default MyResume;
