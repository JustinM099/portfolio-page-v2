import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import profile_pic from '../assets/img/profile-image-circle.png'

const About = () => {
    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
            style={{ height: '100vh' }}>
            <Grid item>
                <Card
                    sx={{
                        height: 'fit-content',
                        width: '90vw',
                        backgroundColor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    square={true}
                    raised={true}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <CardMedia
                                component="img"
                                alt="profile pic"
                                image={profile_pic}
                                sx={{
                                    padding: '1.2em',
                                    width: '90%'
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CardContent
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textContent: 'center'
                                }}
                            >
                                <div style={{ textAlign: 'center'}}>
                                    <h1 style={{fontSize: '3.5em'}}>Hello!</h1>
                                    <p className="about-text">I'm Justin Meredith, a wine nerd turned web developer.</p>
                                    <p className="about-text">I've spent more than a decade in the wine industry.</p>
                                    <p className="about-text">Now I'm changing fields, and beginning a new career. Join me on my journey.
                                    </p>
                                </div>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

export default About