import React, { Component, Fragment } from "react";
import { withStyles, Grid, Typography } from "@material-ui/core"
import aboutStyles from "../styles/aboutStyles"

import peopleIcon from '../styles/pictures/peopleIcon.png'
import moneyIcon from '../styles/pictures/moneyIcon.png'
import gameIcon from '../styles/pictures/gameIcon.png'

class About extends Component {

    render() {
        const { classes, mobile } = this.props
        return (
            <Fragment> 
                <div className={classes.wrapper}>
                    <Grid 
                        container 
                        direction="row" 
                        justify="center" 
                        alignItems="center"
                    >
                        <Grid item sm={12} md={6}>
                            <div className={classes.wrapper}>
                                <Typography
                                    variant="h2"
                                    align="center"
                                    color="primary"
                                >
                                    who and what?
                                </Typography>
                                <hr className={classes.hr} />
                                <Typography
                                    variant="body1"
                                    align="center"
                                    gutterBottom
                                    paragraph
                                >
                                   HawkHack is a 24-hour hackathon event at Montclair State University. Students of any majors are welcome to form a team and build awesome software and hardware projects. Industry experts and mentors will be there to help and guide students and create a learning environment through talks, workshops, and one-on-one guidance. We encourage anyone from beginner to advanced developers to challenge themselves and create something awesome.
                                </Typography>
                            </div>
                            <div className={classes.wrapper}>
                                <Typography
                                    variant="h2"
                                    align="center"
                                    color="primary"
                                >
                                    when and where?
                                </Typography>
                                <hr className={classes.hr} />
                                <Typography
                                    variant="body1"
                                    align="center"
                                    gutterBottom
                                    paragraph
                                >
                                   <b>November 23rd, 10:00 AM to November 24th, 10:00 AM</b>
                                   <br />
                                   <b>Montclair State University, Student Center - Ballrooms A, B, C</b>
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <img className={classes.img} src="https://picsum.photos/650/500" alt="there should be something really cool here" />
                        </Grid>
                    </Grid> 
                </div>
                <div className={classes.wrapper}> 
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <Grid item xs={12} sm={12} md={3}>
                            <div className={classes.wrapper}>
                                <Grid
                                  container
                                  direction="row"
                                  justify="center"
                                  alignItems="center"
                                >
                                    <Grid item>
                                        <div className={classes.wrapper}>
                                            <img src={peopleIcon} width="100px" height="auto" />
                                        </div>
                                    </Grid>
                                </Grid>
                                <Typography variant="h5" align="center" >
                                    First Hackathon at MSU with over 150+ attendees
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <div className={classes.border}>
                                <div className={classes.wrapper}>
                                    <Grid
                                      container
                                      direction="row"
                                      justify="center"
                                      alignItems="center"
                                    >
                                        <Grid item>
                                            <div className={classes.wrapper}>
                                                <img src={moneyIcon} width="100px" height="auto" />
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Typography variant="h5" align="center" >
                                        $15,000+ in sponsorships and $1000+ in prizes 
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <div className={classes.wrapper}>
                                <Grid
                                  container
                                  direction="row"
                                  justify="center"
                                  alignItems="center"
                                >
                                    <Grid item>
                                        <div className={classes.wrapper}>
                                            <img src={gameIcon} width="100px" height="auto" />
                                        </div>
                                    </Grid>
                                </Grid>
                                <Typography variant="h5" align="center" >
                                    Lasertag and Smash tournament certified
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(aboutStyles)(About)