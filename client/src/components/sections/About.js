import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import aboutStyles from "../styles/aboutStyles";
import peopleIcon from '../styles/pictures/peopleIcon.png';
import moneyIcon from '../styles/pictures/moneyIcon.png';
import gameIcon from '../styles/pictures/gameIcon.png';

const About = () => {
    const classes = aboutStyles();

    return (
        <div className={classes.section}> 
            <Grid 
                container 
                direction="row" 
                justify="space-between" 
                alignItems="center"
            >
                <Grid item sm={12} md={12} lg={6}>
                    <div className={classes.wrapper}>
                        <Typography
                            variant="h2"
                            align="center"
                            color="primary"
                        >
                            What?
                        </Typography>
                        <div className={classes.wrapper}>
                            <Typography
                                variant="body1"
                                align="center"
                                gutterBottom
                                color="primary"
                                className={classes.whatText}
                            >
                               HawkHack is a 24-hour hackathon event at Montclair State University. 
                               Students of any majors are welcome to form a team and build awesome software 
                               and hardware projects. Industry experts and mentors will be there to help and guide 
                               students and create a learning environment through talks, workshops, 
                               and one-on-one guidance. We encourage anyone from beginner to 
                               advanced developers to challenge themselves and create something awesome.
                            </Typography>
                        </div>
                        <Typography
                            variant="h2"
                            align="center"
                            color="primary"
                        >
                            When and where?
                        </Typography>
                        <div className={classes.wrapper}>
                            <Typography
                                variant="body1"
                                align="center"
                                gutterBottom
                                className={classes.whatText}
                            >
                               <b>November 23rd, 10:00 AM to November 24th, 10:00 AM</b>
                               <br />
                               <b>Montclair State University, Student Center - Ballrooms A, B, C</b>
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={12} md={12} lg={6}>
                    <div className={classes.wrapper}>
                        <img className={classes.img} src="https://picsum.photos/650/500" alt="there should be something really cool here" />
                    </div>
                </Grid>
            </Grid> 
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item style={{ width: "100%" }}>
                    <div className={classes.wrapper}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.4248192418804!2d-74.19984088466741!3d40.862550436328576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fe352883ec55%3A0xeece028744cfc9ae!2sMontclair%20State%20University!5e0!3m2!1sen!2sus!4v1579972815513!5m2!1sen!2sus" 
                            width="100%" height="350" frameborder="0" className={classes.iframe} title="maps" allowfullscreen=""></iframe>
                    </div>
                </Grid>
            </Grid>
            <div className={classes.wrapper}>
                <div className={classes.wrapper}>
                    <div className={classes.wrapper}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={12} sm={12} md={3}>
                                <Grid
                                  container
                                  direction="column"
                                  justify="center"
                                  alignItems="center"
                                >
                                    <Grid item>
                                         <img alt="icons" src={peopleIcon} width="100px" height="auto" />
                                    </Grid>
                                    <Grid item>
                                        <Typography 
                                            variant="h5"
                                            align="center"
                                            style={{ width: "200px" }}
                                            gutterBottom
                                            className={classes.whatText}
                                        >
                                            First Hackathon at MSU with over 150+ attendees
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <Grid
                                  container
                                  direction="column"
                                  justify="center"
                                  alignItems="center"
                                >
                                    <Grid item>
                                        <img alt="icons" src={moneyIcon} width="100px" height="auto" />
                                    </Grid>
                                    <Grid item>
                                        <Typography 
                                            variant="h5"
                                            align="center"
                                            style={{ width: "200px" }}
                                            gutterBottom
                                            className={classes.whatText}
                                        >
                                            $15,000+ in sponsorships and $1000+ in prizes 
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <img alt="icons" src={gameIcon} width="100px" height="auto" />
                                    </Grid>
                                    <Grid item>
                                        <Typography 
                                            variant="h5"
                                            align="center"
                                            style={{ width: "200px" }}
                                            gutterBottom
                                            className={classes.whatText}
                                        >
                                            Lasertag and Smash tournament certified, sponsored 
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;