import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, TextField, Button } from '@mui/material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Importing different resume templates.
import Template1 from '../TemplatesComponents/Template1';
import Template2 from '../TemplatesComponents/Template2';
import Template3 from '../TemplatesComponents/Template3';
import Template4 from '../TemplatesComponents/Template4';

// Importing a success message component.
import SuccessMessage from './Modal';

// Importing an action to update the Redux store.
import { updateSelectedNavItem } from '../../ReduxManager/dataStoreSlice';

// Define a functional component for MyResume.

function MyResume() {
  const selectedTemplate = useSelector(state => state.dataStore.selectedTemplate);
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState('resume');
  const dispatch = useDispatch();

  // Function to download the resume as a PDF.
  const downloadComponentPDF = () => {
  
    const input = document.getElementById('divToPrint');
    const inputWidth = input.offsetWidth;
    const inputHeight = input.offsetHeight;
  
    html2canvas(input, { width: inputWidth, height: inputHeight })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'px', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const ratio = Math.min(pdfWidth / inputWidth, pdfHeight / inputHeight);
        const width = inputWidth * ratio;
        const height = inputHeight * ratio;
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        pdf.save(`${fileName}.pdf`);
      })
      .then(() => {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 6000);
      });
  };
  

  const handleBack = () => {
    // Dispatch action to update selectedNavItem to 'KeySkills'
    dispatch(updateSelectedNavItem('KeySkills'));
  };

  // Render the component.
  return (
    <Grid container spacing={3} className="container">
      <Grid item xs={12} md={6}>
        <h2 className="text-left mb-4">Resume Preview</h2>
        <div id='divToPrint' style={{ flex: '3', position: 'relative', width: '794px', height: '1123px' }}>
          {selectedTemplate === ""
            ? <div><h1>Please select a template!</h1></div>
            : selectedTemplate === "Template 1"
              ? <Template1 />
              : selectedTemplate === "Template 2"
                ? <Template2 />
                : selectedTemplate === "Template 3"
                  ? <Template3 />
                  : <Template4 />}
        </div>
      </Grid>
      <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft:'170px', marginTop:'60px'}}>
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
            <Link to="/detailsfillingpage/keyskills" style={{ textDecoration: 'none', marginRight: '8px' }}>
              <Button variant="contained" color="primary" onClick={handleBack}>Back</Button>
            </Link>
            <Button variant="contained" color="success" onClick={downloadComponentPDF}>Save</Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className='mt-2 p-5 w-100' style={{ minWidth: "1200px", overflow: 'scroll' }}>
          <div><SuccessMessage showModal={showModal} setShowModal={setShowModal} /></div>
        </div>
      </Grid>
    </Grid>
  );
}

export default MyResume;
