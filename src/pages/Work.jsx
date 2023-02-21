import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import bottlesDb from '../assets/img/bottles-db-mern-screenshot.png'
import bottlesDbV1 from '../assets/img/bottles-db-v1-preview.png'
import gitHub from '../assets/img/GitHub-Mark-120px-plus.png'
import cocktail_hour from '../assets/img/cocktail-hour-preview-image-2.png'
import weather_dashboard from '../assets/img/weather-dashboard-link-2.png'

const Work = () => {
    return (
        <Box
            sx={{
                padding: "1%"
            }}
        >
            <Grid container spacing={2}
            >
                <Grid item xs={12} md={4}
                >

                    <Card className="work-card"
                        sx={{
                            padding: '2%'
                        }}
                        square={true}
                        raised={true}
                    >
                        <CardHeader
                            title="Bottles dB v2"
                            titleTypographyProps={{ variant: 'h4' }}
                            subheader='a CRUD app to track your wine cellar, created with the MERN stack and Redux.'
                        />
                        {/* <CardContent><h1>Bottles dB v2</h1></CardContent> */}
                        <a href="https://bottles-db-mern.herokuapp.com/">
                            <CardMedia
                                component="img"
                                alt="a screenshot from bottlesDb"
                                image={bottlesDb}
                            />
                        </a>
                        <br />
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <a href="https://www.github.com/JustinM099/bottlesDB">
                                <CardMedia
                                    component="img"
                                    alt="github logo"
                                    image={gitHub}
                                    sx={{
                                        height: '32px',
                                        width: '32px'
                                    }}
                                />
                            </a>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}
                >

                    <Card className="work-card"
                        sx={{
                            padding: '2%'
                        }}
                        square={true}
                        raised={true}
                    >
                        <CardHeader
                            title="Bottles dB v1"
                            titleTypographyProps={{ variant: 'h4' }}
                            subheader='a CRUD app to track your wine cellar, created with handlebars and SQL.'
                        />
                        {/* <CardContent><h1>Bottles dB v2</h1></CardContent> */}
                        <a href="https://bottles-db.herokuapp.com/">
                            <CardMedia
                                component="img"
                                alt="a screenshot from bottlesDb v1"
                                image={bottlesDbV1}
                            />
                        </a>
                        <br />
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <a href="https://www.github.com/JustinM099/wine-cellar-tracker">
                                <CardMedia
                                    component="img"
                                    alt="github logo"
                                    image={gitHub}
                                    sx={{
                                        height: '32px',
                                        width: '32px'
                                    }}
                                />
                            </a>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}
                >

                    <Card className="work-card"
                        sx={{
                            padding: '2%'
                        }}
                        square={true}
                        raised={true}
                    >
                        <CardHeader
                            title="Cocktail Hour"
                            titleTypographyProps={{ variant: 'h4' }}
                            subheader='an app to suggest cocktail recipes based on ingredients.'
                        />
                        {/* <CardContent><h1>Bottles dB v2</h1></CardContent> */}
                        <a href="https://lyssg2.github.io/cocktail-hour/index.html">
                            <CardMedia
                                component="img"
                                alt="a screenshot from cocktail hour"
                                image={cocktail_hour}
                            />
                        </a>
                        <br />
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <a href="https://github.com/lyssg2/cocktail-hour">
                                <CardMedia
                                    component="img"
                                    alt="github logo"
                                    image={gitHub}
                                    sx={{
                                        height: '32px',
                                        width: '32px'
                                    }}
                                />
                            </a>
                        </div>
                    </Card>
                </Grid>
                {/* <Grid item xs={12} md={4}
                >
                    <Card className="work-card"
                        sx={{
                            padding: '2%'
                        }}
                        square={true}
                        raised={true}
                    >
                        <CardHeader
                            title="Weather Dashboard"
                            titleTypographyProps={{ variant: 'h4' }}
                            subheader='an app to track the weather based on city name, giving a 5-day forecast.'
                        />
                        {/* <CardContent><h1>Bottles dB v2</h1></CardContent> 
                        <a href="https://justinm099.github.io/weather-dashboard/">
                            <CardMedia
                                component="img"
                                alt="a screenshot from a weather dashboard app"
                                image={weather_dashboard}
                            />
                        </a>
                        <br />
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <a href="https://github.com/JustinM099/weather-dashboard">
                                <CardMedia
                                    component="img"
                                    alt="github logo"
                                    image={gitHub}
                                    sx={{
                                        height: '32px',
                                        width: '32px'
                                    }}
                                />
                            </a>
                        </div>
                    </Card>
                </Grid> */}
                
                {/*<Grid item xs={12} md={4}
                >
                    <Card className="work-card"
                        sx={{
                            padding: '2%'
                        }}
                        square={true}
                        raised={true}
                    >
                        <CardHeader
                            title="Bottles dB v1"
                            titleTypographyProps={{ variant: 'h4' }}
                            subheader='a CRUD app to track your wine cellar, created with the MERN stack and Redux.'
                        />
                        <a href="https://bottles-db-mern.herokuapp.com/">
                            <CardMedia
                                component="img"
                                alt="a screenshot from bottlesDb"
                                image={bottlesDb}
                            />
                        </a>
                        <br />
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <a href="https://www.github.com/JustinM099/bottlesDB">
                                <CardMedia
                                    component="img"
                                    alt="github logo"
                                    image={gitHub}
                                    sx={{
                                        height: '32px',
                                        width: '32px'
                                    }}
                                />
                            </a>
                        </div>
                    </Card>
                </Grid> */}
               {/* <Grid item xs={12} md={4}
                > 

                    <Card className="work-card"
                        sx={{
                            padding: '2%'
                        }}
                        square={true}
                        raised={true}
                    >
                        <CardHeader
                            title="Bottles dB v2"
                            titleTypographyProps={{ variant: 'h4' }}
                            subheader='a CRUD app to track your wine cellar, created with the MERN stack and Redux.'
                        />
            
                        <a href="https://bottles-db-mern.herokuapp.com/">
                            <CardMedia
                                component="img"
                                alt="a screenshot from bottlesDb"
                                image={bottlesDb}
                            />
                        </a>
                        <br />
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <a href="https://www.github.com/JustinM099/bottlesDB">
                                <CardMedia
                                    component="img"
                                    alt="github logo"
                                    image={gitHub}
                                    sx={{
                                        height: '32px',
                                        width: '32px'
                                    }}
                                />
                            </a>
                        </div>
                    </Card>
                </Grid> */}
            </Grid>
        </Box>
    )
}

export default Work