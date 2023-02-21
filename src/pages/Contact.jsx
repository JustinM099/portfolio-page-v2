import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import profile_pic from '../assets/img/profile-image-circle.png'
import Button from '@mui/material/Button'

const Contact = () => {
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
                    <Grid container>
                        <Grid item xs={12}>
                            <CardContent>
                                <div style={{ textAlign: 'center' }}>
                                    <h1 style={{ fontSize: '3.5em' }}>Get In Touch</h1>
                                    <h3 style={{ fontSize: '2em' }}>If you want to talk, please reach out. </h3>
                                </div>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12}>
                            <CardContent
                            >
                                <Button variant="outlined" color="inherit" size="large" style={{margin: '1%'}} href={'https://drive.google.com/file/d/16crLrAOHcSSaTRwX3CIlfK9Xxi9FSs7X/view?usp=share_link'}>Resume</Button>
                                <Button variant="outlined" color="inherit" size="large" style={{margin: '1%'}} href={'tel:+12068615635'}>Call Me!</Button>
                                <Button variant="outlined" color="inherit" size="large"style={{margin: '1%'}} href={'mailto:justinm099@mac.com'}>Email Me!</Button>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Contact