import React from 'react';
import { Grid, Typography } from '@mui/material';
import { WhatsApp, Facebook, Mail, Instagram, LinkedIn, Twitter } from '@mui/icons-material';


function AboutUs() {
    return (
        <div className='mt-5'>
            
            <div className='px-3'>
                
                <Typography variant="h1" className='mt-3 p-2 px-3' style={{
                    fontFamily: 'Helvetica',
                    textAlign: 'left',
                    textDecoration: 'none',
                    color: '#1c226b',
                    fontSize: '48px',
                    fontWeight: 'bold',
                    lineHeight: '1.3',
                }}>
                    <b><i>Resume Builder</i></b>
                </Typography>
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
                            <Typography variant="body1">
                                A vibrant selection of eye-catching and professional resume
                                and cover letter premium templates from Office help you
                                stand out from other applicants and leave a lasting impression.
                                We have some of the best resume templates for job seekers in almost every field.
                                Our templates are professionally designed, employer-ready,
                                ATS-friendly and easy to customize. Choose from dozens of free resume templates,
                                then use our Resume Builder to create a professional resume in minutes.
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
                        <Typography variant="h3" className='px-4' style={{ wordSpacing: "5px", letterSpacing: "1px" }}>
                            Share with your friends.
                        </Typography>
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
