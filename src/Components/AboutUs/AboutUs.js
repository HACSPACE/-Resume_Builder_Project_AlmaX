import React from 'react';
import { Grid, Typography } from '@mui/material';
import { WhatsApp, Facebook, Mail, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

function CustomTypography({ children, variant, style }) {
    return (
        <Typography variant={variant} style={{
            fontFamily: 'Helvetica',
            textAlign: 'left',
            textDecoration: 'none',
            color: '#000001',
            ...style
        }}>
            {children}
        </Typography>
    );
}

function AboutUs() {
    return (
        <div className='mt-5'>
            <div className='px-3'>
                <CustomTypography variant="h1" style={{ fontSize: '48px', fontWeight: 'bold', lineHeight: '1.3' }}>
                    <b><i>Resume </i></b>
                </CustomTypography>
                <CustomTypography variant="h1" style={{ fontSize: '48px', fontWeight: 'bold', lineHeight: '1.3' }}>
                    <b><i>Builder</i></b>
                </CustomTypography>
            </div>
            <div>
                {/* Left side content */}
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className='mt-2 mb-5 p-2 px-3' style={{
                            fontSize: '17px',
                            textAlign: 'justify',
                            textJustify: 'inter-word'
                        }}>
                            <Typography variant="body1" align="justify">
                                Stand out from the crowd with our vibrant selection of professional resume 
                                and cover letter templates. Our premium templates, designed specifically for 
                                modern job seekers, are guaranteed to leave a lasting impression on employers. 
                                Whether you're in tech, finance, or any other field, we've got you covered. 
                                Our templates are not only visually appealing but also ATS-friendly and easy to 
                                customize to suit your unique style. With dozens of free templates to choose from, 
                                creating a professional resume has never been easier. 
                                Try our Resume Builder today and create your standout resume in minutes.
                            </Typography>
                        </div>
                    </Grid>
                    {/* Right side content (image) */}
                    <Grid item xs={12} md={6}>
                        <img className='align-self-center mx-auto' style={{ maxWidth: '100%', float: 'right' }} src="https://cdn.pixabay.com/photo/2017/10/06/09/34/group-2822423__340.png" alt="discussion" />
                    </Grid>
                </Grid>
            </div>
            {/* Share with your friends section */}
            <div className='mt-5 px-3'>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <CustomTypography variant="h3" style={{ wordSpacing: "5px", letterSpacing: "1px" }}>
                            Share with your friends.
                        </CustomTypography>
                        <div style={{ display: 'flex', background: '#faf8f8' }}>
                            <div className='ms-5 p-2'>
                                <WhatsApp fontSize="large" style={{ color: "green" }} />
                            </div>
                            <div className='p-2 ms-4'>
                                <Facebook fontSize="large" style={{ color: "blue" }} />
                            </div>
                            <div className='p-2 ms-4'>
                                <Mail fontSize="large" style={{ color: "red" }} />
                            </div>
                            <div className='p-2 ms-4'>
                                <Instagram fontSize="large" style={{ color: "#000000" }} />
                            </div>
                            <div className='p-2 ms-4'>
                                <LinkedIn fontSize="large" style={{ color: "#0077B5" }} />
                            </div>
                            <div className='p-2 ms-4'>
                                <Twitter fontSize="large" style={{ color: "#1DA1F2" }} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default AboutUs;
