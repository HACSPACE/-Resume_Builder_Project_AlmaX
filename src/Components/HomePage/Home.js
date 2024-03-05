// Importing the CSS file for styling
import './Home.css'; 

// Importing data and Redux-related modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Importing data and Redux-related modules
import { templateImagesPaths } from '../Data/Data';
import { useDispatch } from 'react-redux';
import { updateState } from '../../ReduxManager/dataStoreSlice';

// Importing Material-UI Typography component
import { Typography } from '@mui/material';

// Importing a package for generating unique IDs
const shortid = require('shortid');

// Defining the Home component
function Home() {
        // State hook to manage selected template
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    // Redux dispatch hook for dispatching actions
    const dispatch = useDispatch();

    // Function to handle template click event
    const handleTemplateClick = (templateName) => {
        setSelectedTemplate(templateName);

         // Dispatching an action to update Redux store
        dispatch(updateState({
            key: 'selectedTemplate',
            value: templateName
        }));
        
    };
    
 // Rendering the component
    return (
        <div className="home-container">
            <Typography
					sx={{
						fontSize: "30px",
						fontWeight: "bold",
                        fontFamily: 'Oswald'
						
					}}>
					TEMPLATES
				</Typography>
            <Typography sx={{ color: "", justifyContent: { xs: "center" }, fontFamily: 'Oswald' , fontSize: '20px'}}>
					Select Template To Get Started
				</Typography>
            <div className="template-container">
                {templateImagesPaths.map((template) => (
                    <div className="template-card" key={shortid.generate()}>
                        <div className="image-container ">
                            <img
                                className={`template-image ${selectedTemplate === template.name ? 'active' : ''}`}
                                src={template.imageSource}
                                alt={template.name}
                                
                            />
                            <div className="overlay"></div>
                        </div>
                        <div className="button-container link-button-container">
                            <Link to="/detailsfillingpage/personalinfo">
                                <button className="use-template-button" onClick={() => handleTemplateClick(template.name)}>Use Template</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;