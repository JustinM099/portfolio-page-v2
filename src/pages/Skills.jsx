import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import vines from '../assets/img/vines.png'
import tech from '../assets/img/tech.jpg'

const Skills = () => {
    return (
        <>
            <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
                <Grid item>
                    <Card
                        sx={{
                            marginTop: '1%',
                            marginBottom: '1%',
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
                                <CardHeader
                                    title='Skills'
                                    titleTypographyProps={{ variant: 'h2' }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CardMedia
                                    component="img"
                                    alt="vines"
                                    image={vines}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CardContent>
                                    <p className="about-text">I started in the wine and spirits industry in 2007, taking a part time job at
                                        the incredible Esquin Wine Merchants in south Seattle.
                                        <br />Before long, I'd stopped studying my original major (art history) and decided to pursue a career in the
                                        wine industry.
                                        I began studying winemaking at the Northwest Wine Academy, and later got a job in wine sales.
                                        <br />I now work as a sales representative for a wine wholesaler in the east side suburbs of Seattle.
                                    </p>
                                </CardContent>
                                <Divider
                                    light={true}
                                    variant="middle"
                                />
                            </Grid>


                            <Grid item xs={12} md={6}>
                                <p className="about-text">Recently, I've decided to change careers and embark upon a journey into
                                    the world of web development.
                                    <br />
                                    <br />
                                    I've been working for the past year to practice with modern technologies such as React, Express, NodeJS, and MongoDB,
                                    and recently graduated from the full-stack web development bootcamp offered by the University of Washington.
                                    <br />
                                    <br />
                                    What you're seeing here is an example of all of the skills that I've learned so far. Watch me grow!
                                </p>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CardMedia
                                    component="img"
                                    alt="a desktop with a cup of coffee and a laptop"
                                    image={tech}
                                />
                            </Grid>
                        </Grid>
                    </Card>

                </Grid>
            </Grid>
        </>
    )
}

export default Skills