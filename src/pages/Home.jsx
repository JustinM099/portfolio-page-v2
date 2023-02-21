import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Slide from '@mui/material/Slide'


const Home = () => {

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>

            <Grid item>
                <Slide
                    direction="up"
                    in={true}
                    timeout={{
                        enter: 1000
                    }}
                    easing={{
                        enter: "cubic-bezier(0, 1.5, .8, 1)",
                        exit: "linear" 
                    }}
                >
                    <h1 style={{
                        fontWeight: 'lighter',
                        fontSize: '6em',
                        textShadow: '1.5px 1.5px 0px gray'
                    }}>I'm Justin.</h1>
                </Slide>
                <Slide
                    direction="up"
                    in={true}

                    timeout={{
                        enter: 1100
                    }}
                >
                    <h3>A web developer.</h3>
                </Slide>
            </Grid>

        </Grid>
    )
}

export default Home